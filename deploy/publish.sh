#!/bin/sh
set -eu

release_id="${1:?Identifiant de version manquant}"
archive_path="${2:?Archive du site manquante}"
config_path="${3:?Configuration Nginx manquante}"
site_root="/mnt/DriveMaison/Sites/orellanatech"
release_dir="$site_root/releases/$release_id"
current_link="$site_root/current"
next_link="$site_root/.current-$release_id"
runtime_dir="$site_root/runtime"
container_name="orellanatech-site"

case "$release_id" in
  *[!0-9a-f]*)
    echo "Identifiant de version invalide." >&2
    exit 1
    ;;
esac

if docker info >/dev/null 2>&1; then
  docker_cmd() { docker "$@"; }
elif sudo -n /usr/bin/docker info >/dev/null 2>&1; then
  docker_cmd() { sudo -n /usr/bin/docker "$@"; }
else
  echo "Le compte de deploiement ne peut pas acceder a Docker." >&2
  exit 1
fi

previous_release="$(readlink "$current_link" 2>/dev/null || true)"

rollback() {
  failure_code=$?
  trap - 0
  set +e
  if [ "$failure_code" -ne 0 ]; then
    echo "Echec du deploiement, restauration de la version precedente."
    rm -f "$next_link"
    if [ -n "$previous_release" ]; then
      rollback_link="$site_root/.rollback-$release_id"
      ln -s "$previous_release" "$rollback_link"
      mv -Tf "$rollback_link" "$current_link"
    else
      docker_cmd rm -f "$container_name" >/dev/null 2>&1 || true
    fi
  fi
  rm -f "$archive_path" "$config_path" "$0"
  exit "$failure_code"
}
trap rollback 0

mkdir -p "$release_dir" "$runtime_dir"
tar -xzf "$archive_path" -C "$release_dir"
test -f "$release_dir/index.html"
install -m 0644 "$config_path" "$runtime_dir/default.conf"

ln -s "$release_dir" "$next_link"
mv -Tf "$next_link" "$current_link"

docker_cmd rm -f "$container_name" >/dev/null 2>&1 || true
docker_cmd run -d \
  --name "$container_name" \
  --restart unless-stopped \
  -p 30081:80 \
  -v "$site_root:/srv/orellanatech:ro" \
  -v "$runtime_dir/default.conf:/etc/nginx/conf.d/default.conf:ro" \
  nginx:1.28-alpine >/dev/null

expected_hash="$(sha256sum "$release_dir/index.html" | awk '{print $1}')"
for attempt in $(seq 1 30); do
  if curl -fsS http://127.0.0.1:30081/health >/dev/null 2>&1; then
    deployed_hash="$(curl -fsS http://127.0.0.1:30081/ | sha256sum | awk '{print $1}')"
    test "$deployed_hash" = "$expected_hash"
    trap - 0
    rm -f "$archive_path" "$config_path" "$0"
    echo "Deploiement valide : $release_id"
    exit 0
  fi
  sleep 2
done

echo "La verification de sante a expire." >&2
exit 1

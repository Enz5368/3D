import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { PerspectiveCamera, Vector3 } from 'three';
import { cameraPath } from '../../config/cameraPath';
import { useScrollProgress } from '../../utils/scrollStore';
import { lerp } from '../../utils/math';

type CameraRigProps = {
  reducedMotion: boolean;
  isMobile: boolean;
};

const findSegment = (progress: number) => {
  for (let index = 0; index < cameraPath.length - 1; index += 1) {
    const current = cameraPath[index];
    const next = cameraPath[index + 1];

    if (progress >= current.progress && progress <= next.progress) {
      return { current, next };
    }
  }

  return {
    current: cameraPath[cameraPath.length - 2],
    next: cameraPath[cameraPath.length - 1],
  };
};

export const CameraRig = ({ reducedMotion, isMobile }: CameraRigProps) => {
  const progress = useScrollProgress();
  const { camera } = useThree();
  const perspectiveCamera = camera as PerspectiveCamera;
  const target = useMemo(() => new Vector3(), []);

  useFrame(() => {
    const adjustedProgress = reducedMotion ? Math.min(progress, 0.12) : progress;
    const { current, next } = findSegment(adjustedProgress);
    const local = (adjustedProgress - current.progress) / (next.progress - current.progress);
    const mobileScale = isMobile ? 0.72 : 1;

    perspectiveCamera.position.set(
      lerp(current.position[0], next.position[0], local) * mobileScale,
      lerp(current.position[1], next.position[1], local),
      lerp(current.position[2], next.position[2], local) + (isMobile ? 1.3 : 0),
    );
    target.set(
      lerp(current.target[0], next.target[0], local),
      lerp(current.target[1], next.target[1], local),
      lerp(current.target[2], next.target[2], local),
    );
    perspectiveCamera.fov = lerp(current.fov, next.fov, local) + (isMobile ? 4 : 0);
    perspectiveCamera.lookAt(target);
    perspectiveCamera.updateProjectionMatrix();
  });

  return null;
};

import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { siteContent } from '../../config/siteContent';

type LoaderProps = {
  isReady: boolean;
};

export const Loader = ({ isReady }: LoaderProps) => {
  const [hidden, setHidden] = useState(false);
  const { progress } = useProgress();
  const displayProgress = isReady ? 100 : Math.round(progress);

  useEffect(() => {
    if (!isReady) {
      setHidden(false);
      return;
    }

    const timeout = window.setTimeout(() => setHidden(true), 620);
    return () => window.clearTimeout(timeout);
  }, [isReady]);

  if (hidden) {
    return null;
  }

  return (
    <div className={`loader ${isReady ? 'loader--ready' : ''}`} role="status" aria-live="polite">
      <div className="loader__mark" aria-hidden="true" />
      <p>{siteContent.brand}</p>
      <strong>{displayProgress}%</strong>
      <div className="loader__bar">
        <span style={{ transform: `scaleX(${Math.max(displayProgress, 8) / 100})` }} />
      </div>
      <span className="sr-only">Chargement de l experience 3D</span>
    </div>
  );
};

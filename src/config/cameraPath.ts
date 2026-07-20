import type { Vector3Tuple } from '../types/three';

export type CameraKeyframe = {
  progress: number;
  position: Vector3Tuple;
  target: Vector3Tuple;
  fov: number;
};

export const cameraPath: CameraKeyframe[] = [
  { progress: 0, position: [0, 0.8, 8.5], target: [0, 0, 0], fov: 42 },
  { progress: 0.16, position: [-2.8, 1.2, 6.2], target: [-0.4, 0.2, 0], fov: 39 },
  { progress: 0.33, position: [3.2, 1.8, 5.2], target: [0.7, 0.1, -0.6], fov: 37 },
  { progress: 0.52, position: [0.7, 1.6, 3.6], target: [0.15, 0.2, -1.5], fov: 34 },
  { progress: 0.7, position: [-3, 2.5, 4.9], target: [-0.6, 0.4, -1.4], fov: 36 },
  { progress: 0.86, position: [2.7, 1.1, 5.8], target: [0.2, 0.2, 0.2], fov: 40 },
  { progress: 1, position: [0, 1.9, 6.4], target: [0, 0.2, 0], fov: 38 },
];

import { useSyncExternalStore } from 'react';
import { clamp01 } from './math';

let progress = 0;
const listeners = new Set<() => void>();

export const updateScrollProgress = (nextProgress: number) => {
  progress = clamp01(nextProgress);
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => progress;

export const useScrollProgress = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

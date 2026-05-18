'use client';

import { useCallback, useEffect, useRef } from 'react';
import { assetPath } from '@/lib/asset-path';

type BackgroundMusicProps = {
  active: boolean;
  unlockOnInteract?: boolean;
};

export default function BackgroundMusic({
  active,
  unlockOnInteract = true,
}: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const unlockedRef = useRef(false);

  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !active || !unlockedRef.current) return;

    audio.volume = 1;
    void audio.play().catch(() => {
      /* Mobile browsers block until user gesture */
    });
  }, [active]);

  const unlock = useCallback(() => {
    if (unlockedRef.current) {
      tryPlay();
      return;
    }
    unlockedRef.current = true;
    tryPlay();
  }, [tryPlay]);

  useEffect(() => {
    if (!active) {
      audioRef.current?.pause();
      return;
    }
    tryPlay();
  }, [active, tryPlay]);

  useEffect(() => {
    if (!unlockOnInteract) return;

    const events = ['pointerdown', 'touchstart', 'click'] as const;
    const handler = () => unlock();

    events.forEach((e) => document.addEventListener(e, handler, { passive: true }));
    return () => {
      events.forEach((e) => document.removeEventListener(e, handler));
    };
  }, [unlock, unlockOnInteract]);

  return (
    <audio
      ref={audioRef}
      src={assetPath('/pretty.mp3')}
      loop
      preload="auto"
      playsInline
      className="hidden"
    />
  );
}

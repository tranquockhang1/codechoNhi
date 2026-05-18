'use client';

import { useEffect, useState } from 'react';
import BackgroundMusic from '@/components/BackgroundMusic';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';
import { assetPath } from '@/lib/asset-path';

const IMAGE_FILES = [
  '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg',
  '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg',
  '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg',
] as const;

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [userImages, setUserImages] = useState<string[]>([]);

  useEffect(() => {
    setUserImages(IMAGE_FILES.map((file) => assetPath(`/${file}`)));
  }, []);

  return (
    <main className="w-screen h-screen bg-[#060010]">
      <BackgroundMusic active={showGallery} unlockOnInteract />

      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : userImages.length > 0 ? (
        <DomeGallery
          images={userImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
          autoRotationSpeed={0.1}
        />
      ) : null}
    </main>
  );
}

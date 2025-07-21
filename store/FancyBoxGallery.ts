'use client';

import { useRef, useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function useFancybox() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    Fancybox.bind(
      ref.current,
      '[data-fancybox="gallery"]',
      {
        animated: true,
        showClass: 'fancybox-zoomIn',
        hideClass: 'fancybox-zoomOut',
        Images: { zoom: true },
        Carousel: {
          transition: 'fade', // valid option
        },
      }
    );

    return () => {
      Fancybox.unbind(ref.current, '[data-fancybox="gallery"]');
      Fancybox.destroy();
    };
  }, []);

  return [ref] as const;
}

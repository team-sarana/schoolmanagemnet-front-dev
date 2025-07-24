'use client';

import { useRef, useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function useFancybox() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    Fancybox.bind(ref.current, '[data-fancybox="gallery"]', {
      showClass: 'fancybox-zoomIn',
      hideClass: 'fancybox-zoomOut',
      Carousel: {
        transition: 'fade',
      },
      on: {
        init: (fancybox:any) => {
          fancybox.plugins.Zoom?.enable();
        },
      },
    });

    return () => {
      Fancybox.unbind(ref.current, '[data-fancybox="gallery"]');
      Fancybox.destroy();
    };
  }, []);

  return [ref] as const;
}

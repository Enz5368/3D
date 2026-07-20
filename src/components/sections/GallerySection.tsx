import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { siteContent } from '../../config/siteContent';
import { SectionShell } from './SectionShell';

export const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : siteContent.gallery[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index === null ? 0 : (index + 1) % siteContent.gallery.length));
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) =>
          index === null
            ? 0
            : (index - 1 + siteContent.gallery.length) % siteContent.gallery.length,
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <SectionShell id="gallery" className="section--gallery">
      <div className="copy-panel" data-reveal>
        <p className="eyebrow">Galerie</p>
        <h2>Trois directions visuelles pretes a remplacer par vos projets.</h2>
      </div>
      <div className="gallery-grid">
        {siteContent.gallery.map((item, index) => (
          <button className="gallery-card" data-reveal key={item.title} onClick={() => setActiveIndex(index)}>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </button>
        ))}
      </div>
      {activeItem ? (
        <div className="modal" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <div className="modal__panel">
            <button
              className="modal__close"
              type="button"
              aria-label="Fermer la galerie"
              onClick={() => setActiveIndex(null)}
            >
              <X size={18} aria-hidden="true" />
            </button>
            <span>{activeItem.category}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
          </div>
        </div>
      ) : null}
    </SectionShell>
  );
};

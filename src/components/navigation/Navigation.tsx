import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteContent } from '../../config/siteContent';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Navigation = () => {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <a className="nav__brand" href="#top" aria-label="NovaFrame Studio - accueil">
        <span aria-hidden="true">N</span>
        {siteContent.brand}
      </a>
      <button
        className="nav__toggle"
        type="button"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
      <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
        {siteContent.nav.map((item) => (
          <a
            className={active === item.href ? 'is-active' : ''}
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="nav__cta" href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
};

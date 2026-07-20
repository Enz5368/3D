import type { PropsWithChildren } from 'react';

type SectionShellProps = PropsWithChildren<{
  id: string;
  className?: string;
  align?: 'left' | 'right' | 'center';
}>;

export const SectionShell = ({ id, className = '', align = 'left', children }: SectionShellProps) => (
  <section id={id} className={`section section--${align} ${className}`}>
    <div className="section__inner">{children}</div>
  </section>
);

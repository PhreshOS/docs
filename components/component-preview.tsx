import type { HTMLAttributes } from 'react';

export function ComponentPreview({ children, className, ...properties }: HTMLAttributes<HTMLDivElement>) {
  return <div
    {...properties}
    className={['react-ui-component-preview', className].filter(Boolean).join(' ')}
  >
    {children}
  </div>;
}

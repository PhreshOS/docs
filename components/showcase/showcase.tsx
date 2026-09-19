'use client';

import type { ReactNode } from 'react';
import { useAppearance } from '@phreshos/react-ui';
import { Select, Surface, Switch } from '../react-ui';
import { ComponentPreview, Preview, PreviewCode } from '../component-preview';
import { DocsCodeBlock } from '../docs-code-block';

export function Showcase({
  children,
  controls,
  code,
}: {
  children: ReactNode;
  controls?: ReactNode;
  code: string;
}) {
  return (
    <ComponentPreview>
      <Preview>
        <ShowcaseLayout controls={controls}>{children}</ShowcaseLayout>
      </Preview>
      <PreviewCode>
        <DocsCodeBlock>{code}</DocsCodeBlock>
      </PreviewCode>
    </ComponentPreview>
  );
}

function ShowcaseLayout({
  children,
  controls,
}: {
  children: ReactNode;
  controls?: ReactNode;
}) {
  const appearance = useAppearance();

  return (
    <div
      className={['component-showcase', controls ? 'component-showcase-with-controls' : null].filter(Boolean).join(' ')}
      style={{ gap: appearance.spacing * 1.5 }}
    >
      <div className="component-showcase-scene">{children}</div>
      {controls ? <SurfaceControls>{controls}</SurfaceControls> : null}
    </div>
  );
}

function SurfaceControls({ children }: { children: ReactNode }) {
  const appearance = useAppearance();

  return (
    <Surface
      className="component-showcase-controls"
      style={{
        display: 'grid',
        alignContent: 'start',
        gap: appearance.spacing,
        minWidth: 0,
        padding: appearance.spacing,
      }}
    >
      {children}
    </Surface>
  );
}

export function ControlSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <Select
      label={label}
      size="small"
      value={value}
      options={options}
      onChange={next => {
        if (next) onChange(next);
      }}
    />
  );
}

export function ControlSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return <Switch label={label} size="small" checked={checked} onChange={onChange} />;
}

export const colorOptions = [
  { value: 'default:base', label: 'Default' },
  { value: 'primary:base', label: 'Primary' },
  { value: 'secondary:base', label: 'Secondary' },
  { value: 'success:base', label: 'Success' },
  { value: 'warning:base', label: 'Warning' },
  { value: 'danger:base', label: 'Danger' },
  { value: 'info:base', label: 'Info' },
] as const;

export const sizeOptions = [
  { value: 'xsmall', label: 'Extra small' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'Extra large' },
] as const;

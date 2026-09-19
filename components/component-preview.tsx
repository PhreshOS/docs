'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'fumadocs-ui/components/ui/tabs';
import { useTheme as useDocsTheme } from 'fumadocs-ui/provider/base';
import type { Preferences } from '@phreshos/react-ui';
import { useAppearance, useThemedValue } from '@phreshos/react-ui';
import { Code2, Eye } from 'lucide-react';
import { useSyncExternalStore, type ComponentProps, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { UIProvider, useBrowserPreferences } from './react-ui';

type ComponentPreviewProps = Omit<ComponentProps<typeof Tabs>, 'className' | 'defaultValue'> & {
  className?: string;
};

const previewWallpapers = {
  light: '/component-preview/light.png',
  dark: '/component-preview/dark.png',
} as const;

export function ComponentPreview({ children, className, ...properties }: ComponentPreviewProps) {
  const { resolvedTheme } = useDocsTheme();
  const browserPreferences = useBrowserPreferences();
  const hydrated = useSyncExternalStore(subscribeToHydration, clientHydration, serverHydration);
  const theme: Preferences['theme'] | undefined = hydrated
    ? resolvedTheme === 'light'
      ? 'light'
      : resolvedTheme === 'dark'
        ? 'dark'
        : undefined
    : undefined;

  const preferences = theme === undefined ? browserPreferences : { ...browserPreferences, theme };

  return <UIProvider preferences={preferences}>
    <Tabs
      {...properties}
      defaultValue="preview"
      className={['component-preview', className].filter(Boolean).join(' ')}
    >
      <TabsList className="component-preview-tabs" aria-label="Component example">
        <TabsTrigger value="preview" className="component-preview-tab">
          <Eye aria-hidden="true" />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className="component-preview-tab">
          <Code2 aria-hidden="true" />
          Code
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  </UIProvider>;
}

function subscribeToHydration() {
  return () => undefined;
}

function clientHydration() {
  return true;
}

function serverHydration() {
  return false;
}

export function Preview({ className, style, children, ...properties }: HTMLAttributes<HTMLDivElement>) {
  return <TabsContent
    {...properties}
    value="preview"
    className={['component-preview-result', className].filter(Boolean).join(' ')}
  >
    <Stage style={style}>{children}</Stage>
  </TabsContent>;
}

function Stage({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const appearance = useAppearance();
  const colors = useThemedValue(appearance.colors);
  const wallpaper = useThemedValue(previewWallpapers);

  return (
    <div
      className="component-showcase-stage"
      style={{
        backgroundColor: colors.background,
        backgroundImage: `url("${wallpaper}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: colors.foreground,
        padding: appearance.spacing * 2,
      }}
    >
      <div className="component-showcase-stage-content" style={style}>
        {children}
      </div>
    </div>
  );
}

export function PreviewCode({ className, ...properties }: HTMLAttributes<HTMLDivElement>) {
  return <TabsContent
    {...properties}
    value="code"
    className={['component-preview-code', className].filter(Boolean).join(' ')}
  />;
}

'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'fumadocs-ui/components/ui/tabs';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { useTheme as useDocsTheme } from 'fumadocs-ui/provider/base';
import type { Preferences } from '@phreshos/react-ui';
import { useAppearance, useThemedValue } from '@phreshos/react-ui';
import { Code2, Eye } from 'lucide-react';
import { useSyncExternalStore, type ComponentProps, type CSSProperties, type ReactNode } from 'react';
import { UIProvider, useBrowserPreferences } from './react-ui';

type ComponentPreviewProps = Omit<ComponentProps<typeof Tabs>, 'children' | 'className' | 'defaultValue'> & {
  className?: string;
  code: string;
  language?: string;
  previewStyle?: CSSProperties;
  children: ReactNode;
};

const previewWallpapers = {
  light: '/component-preview/light.png',
  dark: '/component-preview/dark.png',
} as const;

export function ComponentPreview({
  children,
  className,
  code,
  language = 'tsx',
  previewStyle,
  ...properties
}: ComponentPreviewProps) {
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
      <TabsContent value="preview" className="component-preview-result">
        <Stage style={previewStyle}>{children}</Stage>
      </TabsContent>
      <TabsContent value="code" className="component-preview-code">
        <DynamicCodeBlock
          lang={language}
          code={code}
          codeblock={{
            className: 'docs-code-block',
            viewportProps: { className: 'docs-code-block-viewport' },
          }}
        />
      </TabsContent>
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

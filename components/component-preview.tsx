'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'fumadocs-ui/components/ui/tabs';
import { useTheme as useDocsTheme } from 'fumadocs-ui/provider/base';
import type { Preferences } from '@phreshos/react-ui';
import { Code2, Eye } from 'lucide-react';
import { useSyncExternalStore, type ComponentProps, type HTMLAttributes } from 'react';
import { AppearanceProvider, useBrowserPreferences } from './react-ui';

type ComponentPreviewProps = Omit<ComponentProps<typeof Tabs>, 'className' | 'defaultValue'> & {
  className?: string;
};

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

  return <AppearanceProvider preferences={preferences}>
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
  </AppearanceProvider>;
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

export function Preview({ className, ...properties }: HTMLAttributes<HTMLDivElement>) {
  return <TabsContent
    {...properties}
    value="preview"
    className={['component-preview-result', className].filter(Boolean).join(' ')}
  />;
}

export function PreviewCode({ className, ...properties }: HTMLAttributes<HTMLDivElement>) {
  return <TabsContent
    {...properties}
    value="code"
    className={['component-preview-code', className].filter(Boolean).join(' ')}
  />;
}

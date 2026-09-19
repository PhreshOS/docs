'use client';

import type { ReactNode } from 'react';
import { useAppearance, useThemedValue } from '@phreshos/react-ui';
import {
  Surface,
  WindowHeader,
  WindowHeaderActions,
  WindowHeaderCenter,
  WindowHeaderClose,
  WindowHeaderIdentity,
  WindowHeaderMaximize,
  WindowHeaderMinimize,
} from '../react-ui';

export function WindowScene({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const appearance = useAppearance();
  const spacing = appearance.spacing;

  return (
    <Surface style={{ width: 'min(100%, 26rem)', overflow: 'hidden' }}>
      <WindowHeader>
        <WindowHeaderIdentity title={title} />
        <WindowHeaderCenter />
        <WindowHeaderActions>
          <WindowHeaderMinimize />
          <WindowHeaderMaximize />
          <WindowHeaderClose />
        </WindowHeaderActions>
      </WindowHeader>
      <div
        style={{
          display: 'grid',
          gap: spacing,
          padding: spacing * 1.5,
        }}
      >
        {children}
      </div>
    </Surface>
  );
}

export function PanelScene({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const appearance = useAppearance();
  const colors = useThemedValue(appearance.colors);
  const spacing = appearance.spacing;

  return (
    <Surface style={{ width: 'min(100%, 26rem)', overflow: 'hidden' }}>
      <div
        style={{
          paddingInline: spacing * 1.5,
          paddingBlock: spacing,
          fontWeight: 500,
          fontSize: '0.8125em',
        }}
      >
        {title}
      </div>
      <Surface
        color="background:soft"
        style={{
          margin: spacing,
          marginTop: 0,
          padding: spacing * 1.5,
          display: 'grid',
          gap: spacing,
          color: colors.foreground,
        }}
      >
        {children}
      </Surface>
    </Surface>
  );
}

'use client';

import type { ReactNode } from 'react';
import { useAppearance } from '@phreshos/react-ui';
import { Panel, Window } from '../react-ui';

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
    <Window style={{ width: 'min(100%, 26rem)' }}>
      <Window.Header>
        <Window.Header.Identity title={title} />
        <Window.Header.Center />
        <Window.Header.Actions>
          <Window.Header.Minimize />
          <Window.Header.Maximize />
          <Window.Header.Close />
        </Window.Header.Actions>
      </Window.Header>
      <Window.Content
        style={{
          display: 'grid',
          alignContent: 'start',
          gap: spacing,
          padding: spacing * 1.5,
        }}
      >
        {children}
      </Window.Content>
    </Window>
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
  const spacing = appearance.spacing;

  return (
    <Panel style={{ width: 'min(100%, 26rem)' }}>
      <Panel.Header
        style={{
          paddingInline: spacing * 1.5,
          paddingBlock: spacing,
          fontWeight: 500,
          fontSize: '0.8125em',
        }}
      >
        {title}
      </Panel.Header>
      <Panel.Content
        color="background:soft"
        style={{
          padding: spacing * 1.5,
          display: 'grid',
          gap: spacing,
        }}
      >
        {children}
      </Panel.Content>
    </Panel>
  );
}

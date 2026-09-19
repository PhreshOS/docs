import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import * as FilesComponents from 'fumadocs-ui/components/files';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';
import { ComponentPreview, Preview, PreviewCode } from './component-preview';
import { DocsCodeBlock } from './docs-code-block';
import {
  ButtonShowcase,
  LayoutShowcase,
  OverlayShowcase,
  PanelShowcase,
  ScrollAreaShowcase,
  SelectionShowcase,
  SliderShowcase,
  SurfaceShowcase,
  TextFieldShowcase,
  WindowHeaderShowcase,
} from './showcase/examples';
import {
  UIProvider,
  Button,
  Checkbox,
  Flex,
  Grid,
  Input,
  Panel,
  PanelContent,
  PanelHeader,
  Radio,
  RadioGroup,
  ScrollArea,
  Select,
  Slider,
  Surface,
  Switch,
  Textarea,
  WindowHeader,
  WindowHeaderActions,
  WindowHeaderCenter,
  WindowHeaderClose,
  WindowHeaderIdentity,
  WindowHeaderMaximize,
  WindowHeaderMinimize,
} from './react-ui';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...FilesComponents,
    ...TabsComponents,
    Accordion,
    Accordions,
    UIProvider,
    Button,
    ButtonShowcase,
    Checkbox,
    ComponentPreview,
    Flex,
    Grid,
    Input,
    LayoutShowcase,
    OverlayShowcase,
    Panel,
    PanelContent,
    PanelHeader,
    PanelShowcase,
    Preview,
    PreviewCode,
    Radio,
    RadioGroup,
    ScrollArea,
    ScrollAreaShowcase,
    Select,
    SelectionShowcase,
    Slider,
    SliderShowcase,
    Step,
    Steps,
    Surface,
    SurfaceShowcase,
    Switch,
    Textarea,
    TextFieldShowcase,
    WindowHeader,
    WindowHeaderShowcase,
    WindowHeaderActions,
    WindowHeaderCenter,
    WindowHeaderClose,
    WindowHeaderIdentity,
    WindowHeaderMaximize,
    WindowHeaderMinimize,
    pre: DocsCodeBlock,
    img: (props) => (
      <ImageZoom {...(props as ComponentProps<typeof ImageZoom>)} />
    ),
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

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
  AppearanceProvider,
  Button,
  Checkbox,
  Flex,
  Grid,
  Input,
  Panel,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Surface,
  Switch,
  Textarea,
} from './react-ui';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...FilesComponents,
    ...TabsComponents,
    Accordion,
    Accordions,
    AppearanceProvider,
    Button,
    Checkbox,
    ComponentPreview,
    Flex,
    Grid,
    Input,
    Panel,
    Preview,
    PreviewCode,
    Radio,
    RadioGroup,
    Select,
    Slider,
    Step,
    Steps,
    Surface,
    Switch,
    Textarea,
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

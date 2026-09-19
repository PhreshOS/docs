'use client';

import { useState } from 'react';
import type { ControlColor, ScaleLevel } from '@phreshos/react-ui';
import {
  AlertDialog,
  Button,
  Checkbox,
  ContextMenu,
  Dialog,
  DropdownMenu,
  Flex,
  Grid,
  Input,
  Menu,
  Panel,
  PanelContent,
  PanelHeader,
  Popover,
  Radio,
  RadioGroup,
  ScrollArea,
  Select,
  Slider,
  Surface,
  Switch,
  Textarea,
  Tooltip,
  WindowHeader,
  WindowHeaderActions,
  WindowHeaderCenter,
  WindowHeaderClose,
  WindowHeaderIdentity,
  WindowHeaderMaximize,
  WindowHeaderMinimize,
} from '../react-ui';
import { PanelScene, WindowScene } from './frames';
import {
  ControlSelect,
  ControlSwitch,
  Showcase,
  colorOptions,
  sizeOptions,
} from './showcase';

export function ButtonShowcase() {
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [disabled, setDisabled] = useState(false);
  const [pending, setPending] = useState(false);
  const attributes = [
    color === 'default:base' ? '' : ` color="${color}"`,
    size === 'medium' ? '' : ` size="${size}"`,
    disabled ? ' disabled' : '',
    pending ? ' pending' : '',
  ].join('');

  return (
    <Showcase
      code={`<Button${attributes}>Save</Button>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Pending" checked={pending} onChange={setPending} />
        </>
      }
    >
      <WindowScene title="Notes">
        <p style={{ margin: 0, fontSize: '0.8125em' }}>
          Save this note to the Program's data.
        </p>
        <Flex gap="small" justify="end">
          <Button size={size} disabled={disabled}>Cancel</Button>
          <Button color={color} size={size} disabled={disabled} pending={pending}>
            Save
          </Button>
        </Flex>
      </WindowScene>
    </Showcase>
  );
}

export function TextFieldShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [name, setName] = useState('Ada Lovelace');
  const [notes, setNotes] = useState('Keep this short.');

  return (
    <Showcase
      code={`<Input label="Name" value="${name}" size="${size}"${disabled ? ' disabled' : ''}${readOnly ? ' readOnly' : ''}${invalid ? ' invalid' : ''} />`}
      controls={
        <>
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <PanelScene title="Account">
        <Input
          label="Name"
          value={name}
          onChange={setName}
          size={size}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage="Enter a name."
        />
        <Textarea
          label="Notes"
          value={notes}
          onChange={setNotes}
          size={size}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage="Enter notes."
        />
      </PanelScene>
    </Showcase>
  );
}

export function SelectionShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [disabled, setDisabled] = useState(false);
  const [notify, setNotify] = useState(true);
  const [updates, setUpdates] = useState(false);
  const [channel, setChannel] = useState<string | null>('stable');
  const [region, setRegion] = useState<string | null>('eu');

  return (
    <Showcase
      code={`<Checkbox label="Include notifications" checked={${notify}} size="${size}" />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <PanelScene title="Preferences">
        <Checkbox label="Include notifications" checked={notify} onChange={setNotify} size={size} color={color} disabled={disabled} />
        <Switch label="Automatic updates" checked={updates} onChange={setUpdates} size={size} color={color} disabled={disabled} />
        <RadioGroup label="Channel" value={channel} onChange={setChannel} size={size} color={color} disabled={disabled}>
          <Radio value="stable" label="Stable" />
          <Radio value="preview" label="Preview" />
        </RadioGroup>
        <Select
          label="Region"
          value={region}
          onChange={setRegion}
          size={size}
          color={color}
          disabled={disabled}
          options={[
            { value: 'us', label: 'United States' },
            { value: 'eu', label: 'Europe' },
          ]}
        />
      </PanelScene>
    </Showcase>
  );
}

export function SliderShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [disabled, setDisabled] = useState(false);
  const [volume, setVolume] = useState(40);

  return (
    <Showcase
      code={`<Slider label="Volume" value={${volume}} size="${size}" color="${color}"${disabled ? ' disabled' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Sound">
        <Slider
          label="Volume"
          value={volume}
          onChange={setVolume}
          size={size}
          color={color}
          disabled={disabled}
        />
      </WindowScene>
    </Showcase>
  );
}

export function SurfaceShowcase() {
  const [color, setColor] = useState('background:base');
  const [radius, setRadius] = useState('medium');
  const [material, setMaterial] = useState(true);
  const surfaceColor = color as ControlColor;

  return (
    <Showcase
      code={`<Surface color="${color}" radius="${radius}"${material ? '' : ' material={false}'}>…</Surface>`}
      controls={
        <>
          <ControlSelect
            label="Color"
            value={color}
            options={[
              { value: 'background:base', label: 'Background' },
              { value: 'background:soft', label: 'Soft background' },
              { value: 'default:base', label: 'Default' },
              { value: 'primary:base', label: 'Primary' },
            ]}
            onChange={setColor}
          />
          <ControlSelect
            label="Radius"
            value={radius}
            options={sizeOptions}
            onChange={setRadius}
          />
          <ControlSwitch label="Material" checked={material} onChange={setMaterial} />
        </>
      }
    >
      <Surface
        color={surfaceColor}
        radius={radius as ScaleLevel}
        material={material}
        style={{ width: 'min(100%, 22rem)', padding: 20 }}
      >
        <p style={{ margin: 0, fontWeight: 500 }}>Surface</p>
        <p style={{ margin: '8px 0 16px', fontSize: '0.8125em' }}>
          Material, radius, and color belong to this host.
        </p>
        <Button color="primary:base">Continue</Button>
      </Surface>
    </Showcase>
  );
}

export function PanelShowcase() {
  const [color, setColor] = useState<ControlColor>('background:base');

  return (
    <Showcase
      code={`<Panel color="${color}">\n  <Panel.Header>Connection</Panel.Header>\n  <Panel.Content>Ready</Panel.Content>\n</Panel>`}
      controls={
        <ControlSelect label="Color" value={color} options={[
          { value: 'background:base', label: 'Background' },
          { value: 'background:soft', label: 'Soft background' },
          { value: 'default:base', label: 'Default' },
        ]} onChange={value => setColor(value as ControlColor)} />
      }
    >
      <Panel color={color} style={{ width: 'min(100%, 22rem)' }}>
        <PanelHeader>
          <strong style={{ display: 'block', padding: 12 }}>Connection</strong>
        </PanelHeader>
        <PanelContent style={{ padding: 16, display: 'grid', gap: 12 }}>
          <p style={{ margin: 0, fontSize: '0.8125em' }}>Ready on this Desktop.</p>
          <Button size="small">Reconnect</Button>
        </PanelContent>
      </Panel>
    </Showcase>
  );
}

export function WindowHeaderShowcase() {
  const [active, setActive] = useState(true);
  const [maximized, setMaximized] = useState(false);

  return (
    <Showcase
      code={`<WindowHeader active={${active}}>\n  <WindowHeader.Identity title="Notes" />\n  <WindowHeader.Actions>\n    <WindowHeader.Maximize maximized={${maximized}} />\n  </WindowHeader.Actions>\n</WindowHeader>`}
      controls={
        <>
          <ControlSwitch label="Active" checked={active} onChange={setActive} />
          <ControlSwitch label="Maximized" checked={maximized} onChange={setMaximized} />
        </>
      }
    >
      <Surface style={{ width: 'min(100%, 26rem)', overflow: 'hidden' }}>
        <WindowHeader active={active}>
          <WindowHeaderIdentity title="Notes" />
          <WindowHeaderCenter />
          <WindowHeaderActions>
            <WindowHeaderMinimize />
            <WindowHeaderMaximize maximized={maximized} onPress={() => setMaximized(value => !value)} />
            <WindowHeaderClose />
          </WindowHeaderActions>
        </WindowHeader>
        <div style={{ padding: 18 }}>
          <p style={{ margin: 0, fontSize: '0.8125em' }}>
            The header sits on the window Surface. Identity follows the active state.
          </p>
        </div>
      </Surface>
    </Showcase>
  );
}

export function ScrollAreaShowcase() {
  const [axis, setAxis] = useState('vertical');

  return (
    <Showcase
      code={`<ScrollArea axis="${axis}" style={{ height: 160 }}>…</ScrollArea>`}
      controls={
        <ControlSelect
          label="Axis"
          value={axis}
          options={[
            { value: 'vertical', label: 'Vertical' },
            { value: 'horizontal', label: 'Horizontal' },
            { value: 'both', label: 'Both' },
          ]}
          onChange={setAxis}
        />
      }
    >
      <WindowScene title="Log">
        <ScrollArea axis={axis as 'vertical' | 'horizontal' | 'both'} style={{ height: 160 }}>
          <div style={{ paddingRight: 8, width: axis === 'vertical' ? undefined : 480 }}>
            {Array.from({ length: 12 }, (_, index) => (
              <p key={index} style={{ margin: '0 0 8px', fontSize: '0.8125em' }}>
                Process output line {index + 1}
              </p>
            ))}
          </div>
        </ScrollArea>
      </WindowScene>
    </Showcase>
  );
}

export function LayoutShowcase() {
  const [direction, setDirection] = useState('row');

  return (
    <Showcase
      code={`<Flex direction="${direction}" gap="medium">…</Flex>`}
      controls={
        <ControlSelect
          label="Direction"
          value={direction}
          options={[
            { value: 'row', label: 'Row' },
            { value: 'column', label: 'Column' },
          ]}
          onChange={setDirection}
        />
      }
    >
      <WindowScene title="Layout">
        <Flex direction={direction as 'row' | 'column'} gap="medium" wrap>
          <Surface style={{ padding: 12, flex: 1 }}>One</Surface>
          <Surface style={{ padding: 12, flex: 1 }}>Two</Surface>
          <Surface style={{ padding: 12, flex: 1 }}>Three</Surface>
        </Flex>
        <Grid columns={3} gap="small">
          <Surface style={{ padding: 12 }}>A</Surface>
          <Surface style={{ padding: 12 }}>B</Surface>
          <Surface style={{ padding: 12 }}>C</Surface>
        </Grid>
      </WindowScene>
    </Showcase>
  );
}

export function OverlayShowcase() {
  return (
    <Showcase
      code={`<Popover>\n  <Popover.Trigger>Details</Popover.Trigger>\n  <Popover.Content>…</Popover.Content>\n</Popover>`}
    >
      <WindowScene title="Inbox">
        <p style={{ margin: 0, fontSize: '0.8125em' }}>
          Overlays open from this window. Each role stays an explicit part.
        </p>
        <Flex gap="small" wrap>
          <Popover>
            <Popover.Trigger size="small">Details</Popover.Trigger>
            <Popover.Content>
              <Popover.Dialog aria-label="Connection details" style={{ padding: 12 }}>
                <Popover.Title>Connection</Popover.Title>
                <p style={{ margin: '8px 0' }}>Connected to the local System.</p>
                <Popover.Close size="small">Done</Popover.Close>
              </Popover.Dialog>
            </Popover.Content>
          </Popover>
          <DropdownMenu>
            <DropdownMenu.Trigger size="small">Actions</DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Menu aria-label="Actions">
                <Menu.Item>Rename</Menu.Item>
                <Menu.Separator />
                <Menu.Item color="danger:base">Delete</Menu.Item>
              </Menu>
            </DropdownMenu.Content>
          </DropdownMenu>
          <ContextMenu>
            <ContextMenu.Trigger>
              <Button size="small">Context actions</Button>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <Menu aria-label="Context actions">
                <Menu.Item>Open</Menu.Item>
                <Menu.Item>Inspect</Menu.Item>
              </Menu>
            </ContextMenu.Content>
          </ContextMenu>
          <Dialog>
            <Dialog.Trigger size="small">Confirm</Dialog.Trigger>
            <Dialog.Backdrop isDismissable>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>End Process?</Dialog.Title>
                  <Dialog.Description>The Process cannot be recovered.</Dialog.Description>
                </Dialog.Header>
                <Dialog.Footer>
                  <Dialog.Close>Cancel</Dialog.Close>
                  <Button color="danger:base">End</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Backdrop>
          </Dialog>
          <AlertDialog>
            <AlertDialog.Trigger size="small" color="danger:base">Delete</AlertDialog.Trigger>
            <AlertDialog.Backdrop>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Delete permanently?</AlertDialog.Title>
                  <AlertDialog.Description>This requires an explicit decision.</AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Close>Cancel</AlertDialog.Close>
                  <AlertDialog.Close color="danger:base">Delete</AlertDialog.Close>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Backdrop>
          </AlertDialog>
          <Tooltip delay={0}>
            <Tooltip.Trigger size="small">Info</Tooltip.Trigger>
            <Tooltip.Content>Visible to this Program</Tooltip.Content>
          </Tooltip>
        </Flex>
      </WindowScene>
    </Showcase>
  );
}

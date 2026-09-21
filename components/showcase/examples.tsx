'use client';

import { useMemo, useState } from 'react';
import { parseDate, parseTime } from '@internationalized/date';
import { useAppearance, type ControlColor, type MaterialMode, type Radius, type ScaleLevel } from '@phreshos/react-ui';
import {
  Accordion,
  AlertDialog,
  Button,
  Calendar,
  Checkbox,
  ComboBox,
  ContextMenu,
  DateField,
  DatePicker,
  DateRangePicker,
  Dialog,
  Disclosure,
  DropdownMenu,
  Flex,
  Grid,
  Input,
  ListBox,
  Menu,
  Panel,
  Popover,
  ProgressBar,
  RadioGroup,
  RangeCalendar,
  ScrollArea,
  Select,
  Slider,
  Surface,
  Switch,
  Table,
  Tabs,
  Textarea,
  TimeField,
  Tooltip,
  Toolbar,
  Tree,
  Window,
} from '../react-ui';
import { WindowScene } from './frames';
import {
  ControlSelect,
  ControlSwitch,
  Showcase,
  colorOptions,
  materialOptions,
  radiusOptions,
  sizeOptions,
} from './showcase';

export function ButtonShowcase() {
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [disabled, setDisabled] = useState(false);
  const [pending, setPending] = useState(false);
  const attributes = [
    color === 'default:base' ? '' : ` color="${color}"`,
    size === 'medium' ? '' : ` size="${size}"`,
    material === 'basic' ? '' : ` material="${material}"`,
    disabled ? ' disabled' : '',
    pending ? ' pending' : '',
  ].join('');

  return (
    <Showcase
      code={`<Flex gap="small" justify="end">
  <Button size="${size}" material="${material}"${disabled ? ' disabled' : ''}>Cancel</Button>
  <Button${attributes}>Save</Button>
</Flex>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Pending" checked={pending} onChange={setPending} />
        </>
      }
    >
      <WindowScene title="Button">
        <p style={{ margin: 0, fontSize: '0.8125em' }}>
          Save this note to the Program's data.
        </p>
        <Flex gap="small" justify="end">
          <Button size={size} material={material} disabled={disabled}>Cancel</Button>
          <Button color={color} size={size} material={material} disabled={disabled} pending={pending}>
            Save
          </Button>
        </Flex>
      </WindowScene>
    </Showcase>
  );
}

export function InputShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [name, setName] = useState('Ada Lovelace');

  return (
    <Showcase
      code={`<Input label="Name" value="${name}" size="${size}" color="${color}" radius="${radius}" material="${material}"${disabled ? ' disabled' : ''}${readOnly ? ' readOnly' : ''}${invalid ? ' invalid' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Input">
        <Input
          label="Name"
          value={name}
          onChange={setName}
          size={size}
          color={color}
          radius={radius}
          material={material}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage="Enter a name."
        />
      </WindowScene>
    </Showcase>
  );
}

export function TextareaShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [notes, setNotes] = useState('Keep this short.');

  return (
    <Showcase
      code={`<Textarea label="Notes" value="${notes}" size="${size}" color="${color}" radius="${radius}" material="${material}"${disabled ? ' disabled' : ''}${readOnly ? ' readOnly' : ''}${invalid ? ' invalid' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Textarea">
        <Textarea
          label="Notes"
          value={notes}
          onChange={setNotes}
          size={size}
          color={color}
          radius={radius}
          material={material}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage="Enter notes."
        />
      </WindowScene>
    </Showcase>
  );
}

export function DateFieldShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [date, setDate] = useState(() => parseDate('2026-09-21'));

  return (
    <Showcase
      code={`<DateField
  label="Due date"
  value={date}
  onChange={setDate}
  size="${size}"
  color="${color}"
  radius="${radius}"
  material="${material}"${disabled ? '\n  disabled' : ''}${readOnly ? '\n  readOnly' : ''}${invalid ? '\n  invalid\n  errorMessage="Choose an available date."' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Date Field">
        <DateField
          label="Due date"
          value={date}
          onChange={next => next && setDate(next)}
          size={size}
          color={color}
          radius={radius}
          material={material}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage={invalid ? 'Choose an available date.' : undefined}
        />
      </WindowScene>
    </Showcase>
  );
}

export function TimeFieldShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [radius, setRadius] = useState<Radius>('medium');
  const [granularity, setGranularity] = useState<'hour' | 'minute' | 'second'>('minute');
  const [hourCycle, setHourCycle] = useState<'locale' | '12' | '24'>('locale');
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [time, setTime] = useState(() => parseTime('09:30'));
  const resolvedHourCycle = hourCycle === 'locale' ? undefined : Number(hourCycle) as 12 | 24;

  return (
    <Showcase
      code={`<TimeField
  label="Start time"
  value={time}
  onChange={setTime}
  granularity="${granularity}"${resolvedHourCycle === undefined ? '' : `
  hourCycle={${resolvedHourCycle}}`}
  size="${size}"
  color="${color}"
  radius="${radius}"
  material="${material}"${disabled ? '\n  disabled' : ''}${readOnly ? '\n  readOnly' : ''}${invalid ? '\n  invalid\n  errorMessage="Choose an available time."' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSelect label="Smallest unit" value={granularity} options={[
            { value: 'hour', label: 'Hour' },
            { value: 'minute', label: 'Minute' },
            { value: 'second', label: 'Second' },
          ]} onChange={value => setGranularity(value as 'hour' | 'minute' | 'second')} />
          <ControlSelect label="Hour cycle" value={hourCycle} options={[
            { value: 'locale', label: 'From locale' },
            { value: '12', label: '12 hour' },
            { value: '24', label: '24 hour' },
          ]} onChange={value => setHourCycle(value as 'locale' | '12' | '24')} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Time Field">
        <TimeField
          label="Start time"
          value={time}
          onChange={next => next && setTime(next)}
          granularity={granularity}
          hourCycle={resolvedHourCycle}
          size={size}
          color={color}
          radius={radius}
          material={material}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage={invalid ? 'Choose an available time.' : undefined}
        />
      </WindowScene>
    </Showcase>
  );
}

export function DatePickerShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [date, setDate] = useState(() => parseDate('2026-09-21'));

  return (
    <Showcase
      code={`<DatePicker
  label="Appointment"
  value={date}
  onChange={setDate}
  size="${size}"
  color="${color}"
  radius="${radius}"
  material="${material}"${disabled ? '\n  disabled' : ''}${readOnly ? '\n  readOnly' : ''}${invalid ? '\n  invalid\n  errorMessage="Choose an available date."' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Date Picker">
        <DatePicker
          label="Appointment"
          value={date}
          onChange={next => next && setDate(next)}
          size={size}
          color={color}
          radius={radius}
          material={material}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage={invalid ? 'Choose an available date.' : undefined}
        />
      </WindowScene>
    </Showcase>
  );
}

export function CalendarShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [date, setDate] = useState(() => parseDate('2026-09-21'));

  return (
    <Showcase
      code={`<Calendar
  aria-label="Release date"
  value={date}
  onChange={setDate}
  size="${size}"
  color="${color}"
  radius="${radius}"
  style={{ justifySelf: "center" }}${disabled ? '\n  disabled' : ''}${readOnly ? '\n  readOnly' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
        </>
      }
    >
      <WindowScene title="Calendar">
        <Calendar
          aria-label="Release date"
          value={date}
          onChange={setDate}
          size={size}
          color={color}
          radius={radius}
          style={{ justifySelf: 'center' }}
          disabled={disabled}
          readOnly={readOnly}
        />
      </WindowScene>
    </Showcase>
  );
}

export function RangeCalendarShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [range, setRange] = useState(() => ({
    start: parseDate('2026-09-21'),
    end: parseDate('2026-09-24'),
  }));

  return (
    <Showcase
      code={`<RangeCalendar
  aria-label="Trip dates"
  value={range}
  onChange={setRange}
  size="${size}"
  color="${color}"
  radius="${radius}"
  style={{ justifySelf: "center" }}${disabled ? '\n  disabled' : ''}${readOnly ? '\n  readOnly' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
        </>
      }
    >
      <WindowScene title="Range Calendar">
        <RangeCalendar
          aria-label="Trip dates"
          value={range}
          onChange={setRange}
          size={size}
          color={color}
          radius={radius}
          style={{ justifySelf: 'center' }}
          disabled={disabled}
          readOnly={readOnly}
        />
      </WindowScene>
    </Showcase>
  );
}

export function DateRangePickerShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [radius, setRadius] = useState<Radius>('medium');
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [range, setRange] = useState(() => ({
    start: parseDate('2026-09-21'),
    end: parseDate('2026-09-24'),
  }));

  return (
    <Showcase
      code={`<DateRangePicker
  label="Trip dates"
  value={range}
  onChange={setRange}
  size="${size}"
  color="${color}"
  radius="${radius}"
  material="${material}"${disabled ? '\n  disabled' : ''}${readOnly ? '\n  readOnly' : ''}${invalid ? '\n  invalid\n  errorMessage="Choose an available range."' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Radius" value={String(radius)} options={radiusOptions} onChange={value => setRadius(value as Radius)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Read only" checked={readOnly} onChange={setReadOnly} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Date Range Picker">
        <DateRangePicker
          label="Trip dates"
          value={range}
          onChange={next => next && setRange(next)}
          size={size}
          color={color}
          radius={radius}
          material={material}
          disabled={disabled}
          readOnly={readOnly}
          invalid={invalid}
          errorMessage={invalid ? 'Choose an available range.' : undefined}
        />
      </WindowScene>
    </Showcase>
  );
}

export function CheckboxShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(true);
  const [indeterminate, setIndeterminate] = useState(false);

  return (
    <Showcase
      code={`<Checkbox label="Include notifications" checked={checked} onChange={setChecked} size="${size}" color="${color}" material="${material}"${indeterminate ? ' indeterminate' : ''}${disabled ? ' disabled' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Indeterminate" checked={indeterminate} onChange={setIndeterminate} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Checkbox">
        <Checkbox label="Include notifications" checked={checked} onChange={setChecked} size={size} color={color} material={material} indeterminate={indeterminate} disabled={disabled} />
      </WindowScene>
    </Showcase>
  );
}

export function SwitchShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <Showcase
      code={`<Switch label="Automatic updates" checked={checked} onChange={setChecked} size="${size}" color="${color}" material="${material}"${disabled ? ' disabled' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Switch">
        <Switch label="Automatic updates" checked={checked} onChange={setChecked} size={size} color={color} material={material} disabled={disabled} />
      </WindowScene>
    </Showcase>
  );
}

export function RadioGroupShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [disabled, setDisabled] = useState(false);
  const [channel, setChannel] = useState<string | null>('stable');

  return (
    <Showcase
      code={`<RadioGroup label="Channel" value={channel} onChange={setChannel} size="${size}" color="${color}" material="${material}"${disabled ? ' disabled' : ''}>
  <RadioGroup.Item value="stable" label="Stable" />
  <RadioGroup.Item value="preview" label="Preview" />
</RadioGroup>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Radio Group">
        <RadioGroup label="Release channel" value={channel} onChange={setChannel} size={size} color={color} material={material} disabled={disabled}>
          <RadioGroup.Item value="stable" label="Stable" />
          <RadioGroup.Item value="preview" label="Preview" />
        </RadioGroup>
      </WindowScene>
    </Showcase>
  );
}

export function SelectShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [disabled, setDisabled] = useState(false);
  const [region, setRegion] = useState<string | null>('eu');
  const options = [
    { value: 'us', label: 'United States' },
    { value: 'eu', label: 'Europe' },
    { value: 'local', label: 'Local only', disabled: true },
  ];

  return (
    <Showcase
      code={`<Select label="Region" value={region} onChange={setRegion} options={regions} size="${size}" color="${color}" material="${material}"${disabled ? ' disabled' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Select">
        <Select
          label="Region"
          value={region}
          onChange={setRegion}
          size={size}
          color={color}
          material={material}
          disabled={disabled}
          options={options}
        />
      </WindowScene>
    </Showcase>
  );
}

export function ListBoxShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [disabled, setDisabled] = useState(false);
  const [tools, setTools] = useState<readonly string[] | 'all'>(['editor', 'terminal']);

  return (
    <Showcase
      code={`<ListBox aria-label="Tools" selectionMode="multiple" value={tools} onChange={setTools} size="${size}" color="${color}">
  <ListBox.Section id="work">
    <ListBox.Header>Work</ListBox.Header>
    <ListBox.Item id="editor">Editor</ListBox.Item>
    <ListBox.Item id="terminal">Terminal</ListBox.Item>
  </ListBox.Section>
  <ListBox.Item id="archive" disabled>Archive</ListBox.Item>
</ListBox>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disable items" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="List Box">
        <ListBox
          aria-label="Tools"
          selectionMode="multiple"
          value={tools}
          onChange={setTools}
          size={size}
          color={color}
          disabledValues={disabled ? ['editor', 'terminal', 'archive'] : ['archive']}
        >
          <ListBox.Section id="work">
            <ListBox.Header>Work</ListBox.Header>
            <ListBox.Item id="editor">Editor</ListBox.Item>
            <ListBox.Item id="terminal">Terminal</ListBox.Item>
          </ListBox.Section>
          <ListBox.Item id="archive" disabled>Archive</ListBox.Item>
        </ListBox>
      </WindowScene>
    </Showcase>
  );
}

export function ComboBoxShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [region, setRegion] = useState<string | null>('eu');
  const regions = [
    { value: 'eu', label: 'Europe' },
    { value: 'us', label: 'United States' },
    { value: 'apac', label: 'Asia Pacific' },
    { value: 'local', label: 'Local only', disabled: true },
  ];

  return (
    <Showcase
      code={`<ComboBox
  label="Region"
  value={region}
  onChange={setRegion}
  options={regions}
  placeholder="Search regions"
  size="${size}"
  color="${color}"
  material="${material}"${disabled ? '\n  disabled' : ''}${invalid ? '\n  invalid\n  errorMessage="Choose an available region."' : ''}
/>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
          <ControlSwitch label="Invalid" checked={invalid} onChange={setInvalid} />
        </>
      }
    >
      <WindowScene title="Combo Box">
        <ComboBox
          label="Region"
          value={region}
          onChange={setRegion}
          options={regions}
          placeholder="Search regions"
          size={size}
          color={color}
          material={material}
          disabled={disabled}
          invalid={invalid}
          errorMessage={invalid ? 'Choose an available region.' : undefined}
        />
      </WindowScene>
    </Showcase>
  );
}

export function TableShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [headerColor, setHeaderColor] = useState<ControlColor>('default:base');
  const [disabledRow, setDisabledRow] = useState(false);
  const [selected, setSelected] = useState<readonly string[] | 'all'>(['editor']);
  const [sort, setSort] = useState<{ column: string; direction: 'ascending' | 'descending' }>({
    column: 'name',
    direction: 'ascending',
  });
  const processes = useMemo(() => {
    const values = [
      { id: 'editor', name: 'Editor', state: 'Running', memory: '148 MB' },
      { id: 'terminal', name: 'Terminal', state: 'Stopped', memory: '72 MB' },
      { id: 'settings', name: 'Settings', state: 'Running', memory: '96 MB' },
    ];

    return values.sort((left, right) => {
      const result = left[sort.column as 'name' | 'state' | 'memory'].localeCompare(
        right[sort.column as 'name' | 'state' | 'memory'],
      );
      return sort.direction === 'ascending' ? result : -result;
    });
  }, [sort]);

  return (
    <Showcase
      code={`<Table
  aria-label="Processes"
  selectionMode="multiple"
  value={selected}
  onChange={setSelected}
  sort={sort}
  onSortChange={setSort}
  size="${size}"
  color="${color}"
>
  <Table.Header color="${headerColor}">
    <Table.Column id="name" isRowHeader allowsSorting>Name</Table.Column>
    <Table.Column id="state" allowsSorting>State</Table.Column>
    <Table.Column id="memory" allowsSorting>Memory</Table.Column>
  </Table.Header>
  <Table.Body items={processes} dependencies={[disabledRow]}>
    {process => (
      <Table.Row id={process.id}${disabledRow ? ' disabled={process.id === "terminal"}' : ''}>
        <Table.Cell>{process.name}</Table.Cell>
        <Table.Cell>{process.state}</Table.Cell>
        <Table.Cell>{process.memory}</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
</Table>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Header color" value={headerColor} options={colorOptions} onChange={value => setHeaderColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disable Terminal" checked={disabledRow} onChange={setDisabledRow} />
        </>
      }
    >
      <WindowScene title="Table">
        <Surface style={{ overflow: 'hidden' }}>
          <ScrollArea axis="horizontal">
            <Table
              aria-label="Processes"
              selectionMode="multiple"
              value={selected}
              onChange={setSelected}
              sort={sort}
              onSortChange={setSort}
              color={color}
              size={size}
            >
              <Table.Header color={headerColor}>
                <Table.Column id="name" isRowHeader allowsSorting>Name</Table.Column>
                <Table.Column id="state" allowsSorting>State</Table.Column>
                <Table.Column id="memory" allowsSorting>Memory</Table.Column>
              </Table.Header>
              <Table.Body items={processes} dependencies={[disabledRow]}>
                {process => <Table.Row id={process.id} disabled={disabledRow && process.id === 'terminal'}>
                  <Table.Cell>{process.name}</Table.Cell>
                  <Table.Cell>{process.state}</Table.Cell>
                  <Table.Cell>{process.memory}</Table.Cell>
                </Table.Row>}
              </Table.Body>
            </Table>
          </ScrollArea>
        </Surface>
      </WindowScene>
    </Showcase>
  );
}

export function TreeShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [disabledArchive, setDisabledArchive] = useState(false);
  const [expanded, setExpanded] = useState<readonly string[]>(['source', 'components']);
  const [selected, setSelected] = useState<readonly string[] | 'all'>(['tree']);

  return (
    <Showcase
      code={`<Tree
  aria-label="Project files"
  selectionMode="multiple"
  value={selected}
  onChange={setSelected}
  expanded={expanded}
  onExpandedChange={setExpanded}
  disabledValues={${disabledArchive ? '["archive"]' : '[]'}}
  size="${size}"
  color="${color}"
>
  <Tree.Item id="source" textValue="Source">
    <Tree.Content>Source</Tree.Content>
    <Tree.Item id="components" textValue="Components">
      <Tree.Content>Components</Tree.Content>
      <Tree.Item id="tree" textValue="tree.tsx">
        <Tree.Content>tree.tsx</Tree.Content>
      </Tree.Item>
      <Tree.Item id="surface" textValue="surface.tsx">
        <Tree.Content>surface.tsx</Tree.Content>
      </Tree.Item>
    </Tree.Item>
    <Tree.Item id="main" textValue="main.ts">
      <Tree.Content>main.ts</Tree.Content>
    </Tree.Item>
  </Tree.Item>
  <Tree.Item id="documentation" textValue="Documentation">
    <Tree.Content>Documentation</Tree.Content>
    <Tree.Item id="readme" textValue="README.md">
      <Tree.Content>README.md</Tree.Content>
    </Tree.Item>
  </Tree.Item>
  <Tree.Item id="archive" textValue="Archive">
    <Tree.Content>Archive</Tree.Content>
  </Tree.Item>
</Tree>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Disable Archive" checked={disabledArchive} onChange={setDisabledArchive} />
        </>
      }
    >
      <WindowScene title="Tree">
        <Tree
          aria-label="Project files"
          selectionMode="multiple"
          value={selected}
          onChange={setSelected}
          expanded={expanded}
          onExpandedChange={setExpanded}
          disabledValues={disabledArchive ? ['archive'] : []}
          size={size}
          color={color}
        >
          <Tree.Item id="source" textValue="Source">
            <Tree.Content>Source</Tree.Content>
            <Tree.Item id="components" textValue="Components">
              <Tree.Content>Components</Tree.Content>
              <Tree.Item id="tree" textValue="tree.tsx">
                <Tree.Content>tree.tsx</Tree.Content>
              </Tree.Item>
              <Tree.Item id="surface" textValue="surface.tsx">
                <Tree.Content>surface.tsx</Tree.Content>
              </Tree.Item>
            </Tree.Item>
            <Tree.Item id="main" textValue="main.ts">
              <Tree.Content>main.ts</Tree.Content>
            </Tree.Item>
          </Tree.Item>
          <Tree.Item id="documentation" textValue="Documentation">
            <Tree.Content>Documentation</Tree.Content>
            <Tree.Item id="readme" textValue="README.md">
              <Tree.Content>README.md</Tree.Content>
            </Tree.Item>
          </Tree.Item>
          <Tree.Item id="archive" textValue="Archive">
            <Tree.Content>Archive</Tree.Content>
          </Tree.Item>
        </Tree>
      </WindowScene>
    </Showcase>
  );
}

export function SliderShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [disabled, setDisabled] = useState(false);
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [volume, setVolume] = useState(40);

  return (
    <Showcase
      code={`<Slider label="Volume" value={${volume}} size="${size}" color="${color}" orientation="${orientation}"${disabled ? ' disabled' : ''} />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Orientation" value={orientation} options={[
            { value: 'horizontal', label: 'Horizontal' },
            { value: 'vertical', label: 'Vertical' },
          ]} onChange={value => setOrientation(value as 'horizontal' | 'vertical')} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Slider">
        <Slider
          label="Volume"
          value={volume}
          onChange={setVolume}
          size={size}
          color={color}
          orientation={orientation}
          disabled={disabled}
          style={orientation === 'vertical' ? { height: 160 } : undefined}
        />
      </WindowScene>
    </Showcase>
  );
}

export function ProgressBarShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [indeterminate, setIndeterminate] = useState(false);
  const [value, setValue] = useState(64);

  return (
    <Showcase
      code={indeterminate
        ? `<ProgressBar label="Uploading archive" indeterminate size="${size}" color="${color}" />`
        : `<ProgressBar label="Uploading archive" value={${value}} size="${size}" color="${color}" />`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={next => setColor(next as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={next => setSize(next as ScaleLevel)} />
          <Slider label="Value" size="small" value={value} onChange={setValue} disabled={indeterminate} />
          <ControlSwitch label="Indeterminate" checked={indeterminate} onChange={setIndeterminate} />
        </>
      }
    >
      <WindowScene title="Progress Bar">
        <ProgressBar
          label="Uploading archive"
          value={value}
          size={size}
          color={color}
          indeterminate={indeterminate}
        />
      </WindowScene>
    </Showcase>
  );
}

export function TabsShowcase() {
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('primary:base');
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [view, setView] = useState('overview');

  return (
    <Showcase
      code={`<Tabs value={view} onChange={setView}>
  <Tabs.List aria-label="Project views">
    <Tabs.Tab id="overview">Overview</Tabs.Tab>
    <Tabs.Tab id="activity">Activity</Tabs.Tab>
    <Tabs.Tab id="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="overview">Project overview</Tabs.Panel>
  <Tabs.Panel id="activity">Recent activity</Tabs.Panel>
  <Tabs.Panel id="settings">Project settings</Tabs.Panel>
</Tabs>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSelect label="Orientation" value={orientation} options={[
            { value: 'horizontal', label: 'Horizontal' },
            { value: 'vertical', label: 'Vertical' },
          ]} onChange={value => setOrientation(value as 'horizontal' | 'vertical')} />
        </>
      }
    >
      <WindowScene title="Tabs">
        <Tabs value={view} onChange={setView} size={size} color={color} orientation={orientation}>
          <Tabs.List aria-label="Project views">
            <Tabs.Tab id="overview">Overview</Tabs.Tab>
            <Tabs.Tab id="activity">Activity</Tabs.Tab>
            <Tabs.Tab id="settings">Settings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="overview"><p style={{ margin: 0 }}>Project overview and current state.</p></Tabs.Panel>
          <Tabs.Panel id="activity"><p style={{ margin: 0 }}>Recent activity appears here.</p></Tabs.Panel>
          <Tabs.Panel id="settings"><p style={{ margin: 0 }}>Project-specific settings.</p></Tabs.Panel>
        </Tabs>
      </WindowScene>
    </Showcase>
  );
}

export function SurfaceShowcase() {
  const [color, setColor] = useState('background:base');
  const [radius, setRadius] = useState<Radius>('medium');
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [shadow, setShadow] = useState(true);
  const surfaceColor = color as ControlColor;
  const materialAttribute = material === 'basic' ? '' : ` material="${material}"`;

  return (
    <Showcase
      code={`<Surface color="${color}" radius="${radius}"${materialAttribute}${shadow ? '' : ' shadow={false}'}>…</Surface>`}
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
            value={String(radius)}
            options={radiusOptions}
            onChange={value => setRadius(value as Radius)}
          />
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSwitch label="Shadow" checked={shadow} onChange={setShadow} />
        </>
      }
    >
      <Surface
        color={surfaceColor}
        radius={radius}
        material={material}
        shadow={shadow}
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
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [contentMaterial, setContentMaterial] = useState<MaterialMode>('basic');

  return (
    <Showcase
      code={`<Panel color="${color}" material="${material}">\n  <Panel.Header>Connection</Panel.Header>\n  <Panel.Content material="${contentMaterial}">Ready</Panel.Content>\n</Panel>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={[
            { value: 'background:base', label: 'Background' },
            { value: 'background:soft', label: 'Soft background' },
            { value: 'default:base', label: 'Default' },
          ]} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Outer material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSelect label="Content material" value={contentMaterial} options={materialOptions} onChange={value => setContentMaterial(value as MaterialMode)} />
        </>
      }
    >
      <Panel color={color} material={material} style={{ width: 'min(100%, 22rem)' }}>
        <Panel.Header>
          <strong style={{ display: 'block', padding: 12 }}>Connection</strong>
        </Panel.Header>
        <Panel.Content material={contentMaterial} style={{ padding: 16, display: 'grid', gap: 12 }}>
          <p style={{ margin: 0, fontSize: '0.8125em' }}>Ready on this Desktop.</p>
          <Button size="small">Reconnect</Button>
        </Panel.Content>
      </Panel>
    </Showcase>
  );
}

export function WindowShowcase() {
  const [active, setActive] = useState(true);
  const [maximized, setMaximized] = useState(false);
  const [material, setMaterial] = useState<MaterialMode>('basic');
  const [headerColor, setHeaderColor] = useState<ControlColor>('foreground:base');

  return (
    <Showcase
      code={`<Window material="${material}">\n  <Window.Header active={${active}} color="${headerColor}">\n    <Window.Header.Identity title="Notes" />\n    <Window.Header.Actions>\n      <Window.Header.Maximize maximized={${maximized}} />\n    </Window.Header.Actions>\n  </Window.Header>\n  <Window.Content>…</Window.Content>\n</Window>`}
      controls={
        <>
          <ControlSelect label="Material" value={material} options={materialOptions} onChange={value => setMaterial(value as MaterialMode)} />
          <ControlSelect label="Header color" value={headerColor} options={colorOptions} onChange={value => setHeaderColor(value as ControlColor)} />
          <ControlSwitch label="Active" checked={active} onChange={setActive} />
          <ControlSwitch label="Maximized" checked={maximized} onChange={setMaximized} />
        </>
      }
    >
      <Window material={material} style={{ width: 'min(100%, 26rem)' }}>
        <Window.Header active={active} color={headerColor}>
          <Window.Header.Identity title="Notes" />
          <Window.Header.Center />
          <Window.Header.Actions>
            <Window.Header.Minimize />
            <Window.Header.Maximize maximized={maximized} onPress={() => setMaximized(value => !value)} />
            <Window.Header.Close />
          </Window.Header.Actions>
        </Window.Header>
        <Window.Content style={{ padding: 18 }}>
          <p style={{ margin: 0, fontSize: '0.8125em' }}>
            Window provides the Surface, header, and remaining content area.
          </p>
        </Window.Content>
      </Window>
    </Showcase>
  );
}

export function ScrollAreaShowcase() {
  const [axis, setAxis] = useState('vertical');
  const [color, setColor] = useState<ControlColor>('foreground:base');
  const contentPadding = useAppearance().spacing * 1.5;

  return (
    <Showcase
      code={`<ScrollArea axis="${axis}" color="${color}" style={{ height: 160 }}>…</ScrollArea>`}
      controls={
        <>
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
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
        </>
      }
    >
      <WindowScene title="Scroll Area" contentStyle={{ padding: 0 }}>
        <ScrollArea axis={axis as 'vertical' | 'horizontal' | 'both'} color={color} style={{ height: 160 }}>
          <div
            // The viewport owns the content inset so its scrollbar can remain
            // flush with the window content boundary.
            style={{
              boxSizing: 'border-box',
              minWidth: '100%',
              padding: contentPadding,
              paddingInlineEnd: contentPadding + 8,
              width: axis === 'vertical' ? '100%' : 480,
            }}
          >
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

export function ToolbarShowcase() {
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [gap, setGap] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('foreground:base');

  return (
    <Showcase
      code={`<Toolbar aria-label="Document actions" orientation="${orientation}" gap="${gap}" color="${color}">
  <Toolbar.Group aria-label="History">
    <Button>Undo</Button>
    <Button>Redo</Button>
  </Toolbar.Group>
  <Toolbar.Separator />
  <Toolbar.Group aria-label="Document">
    <Button>Copy</Button>
    <Button color="primary:base">Save</Button>
  </Toolbar.Group>
</Toolbar>`}
      controls={
        <>
          <ControlSelect
            label="Orientation"
            value={orientation}
            options={[
              { value: 'horizontal', label: 'Horizontal' },
              { value: 'vertical', label: 'Vertical' },
            ]}
            onChange={value => setOrientation(value as 'horizontal' | 'vertical')}
          />
          <ControlSelect
            label="Gap"
            value={gap}
            options={sizeOptions}
            onChange={value => setGap(value as ScaleLevel)}
          />
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
        </>
      }
    >
      <WindowScene title="Toolbar">
        <Toolbar aria-label="Document actions" orientation={orientation} gap={gap} color={color}>
          <Toolbar.Group aria-label="History">
            <Button>Undo</Button>
            <Button>Redo</Button>
          </Toolbar.Group>
          <Toolbar.Separator />
          <Toolbar.Group aria-label="Document">
            <Button>Copy</Button>
            <Button color="primary:base">Save</Button>
          </Toolbar.Group>
        </Toolbar>
      </WindowScene>
    </Showcase>
  );
}

export function DisclosureShowcase() {
  const [expanded, setExpanded] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<ScaleLevel>('medium');
  const [color, setColor] = useState<ControlColor>('default:base');

  return (
    <Showcase
      code={`<Disclosure expanded={expanded} onChange={setExpanded}${disabled ? ' disabled' : ''} size="${size}" color="${color}">
  <Disclosure.Trigger>Connection details</Disclosure.Trigger>
  <Disclosure.Content>
    Connected through the encrypted System transport.
  </Disclosure.Content>
</Disclosure>`}
      controls={
        <>
          <ControlSelect label="Color" value={color} options={colorOptions} onChange={value => setColor(value as ControlColor)} />
          <ControlSelect label="Size" value={size} options={sizeOptions} onChange={value => setSize(value as ScaleLevel)} />
          <ControlSwitch label="Expanded" checked={expanded} onChange={setExpanded} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Disclosure">
        <Disclosure
          expanded={expanded}
          onChange={setExpanded}
          disabled={disabled}
          size={size}
          color={color}
        >
          <Disclosure.Trigger>Connection details</Disclosure.Trigger>
          <Disclosure.Content>
            <p style={{ margin: 0 }}>Connected through the encrypted System transport.</p>
          </Disclosure.Content>
        </Disclosure>
      </WindowScene>
    </Showcase>
  );
}

export function AccordionShowcase() {
  const [multiple, setMultiple] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [expanded, setExpanded] = useState<readonly string[]>(['general']);

  const items = (
    <>
      <Accordion.Item id="general">
        <Accordion.Trigger>General</Accordion.Trigger>
        <Accordion.Content>Program identity and startup behavior.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item id="privacy">
        <Accordion.Trigger>Privacy</Accordion.Trigger>
        <Accordion.Content>Permissions and data access.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item id="advanced">
        <Accordion.Trigger>Advanced</Accordion.Trigger>
        <Accordion.Content>Runtime and diagnostic options.</Accordion.Content>
      </Accordion.Item>
    </>
  );

  return (
    <Showcase
      code={multiple ? `<Accordion multiple value={expanded} onChange={setExpanded}${disabled ? ' disabled' : ''}>
  <Accordion.Item id="general">…</Accordion.Item>
  <Accordion.Item id="privacy">…</Accordion.Item>
  <Accordion.Item id="advanced">…</Accordion.Item>
</Accordion>` : `<Accordion
  value={expanded[0] ?? null}
  onChange={value => setExpanded(value == null ? [] : [value])}${disabled ? '\n  disabled' : ''}
>
  <Accordion.Item id="general">
    <Accordion.Trigger>General</Accordion.Trigger>
    <Accordion.Content>Program identity and startup behavior.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item id="privacy">…</Accordion.Item>
  <Accordion.Item id="advanced">…</Accordion.Item>
</Accordion>`}
      controls={
        <>
          <ControlSwitch label="Allow multiple" checked={multiple} onChange={value => {
            setMultiple(value);
            setExpanded(current => value ? current : current.slice(0, 1));
          }} />
          <ControlSwitch label="Disabled" checked={disabled} onChange={setDisabled} />
        </>
      }
    >
      <WindowScene title="Accordion">
        {multiple
          ? <Accordion multiple value={expanded} onChange={setExpanded} disabled={disabled}>{items}</Accordion>
          : <Accordion
              value={expanded[0] ?? null}
              onChange={value => setExpanded(value == null ? [] : [value])}
              disabled={disabled}
            >{items}</Accordion>}
      </WindowScene>
    </Showcase>
  );
}

export function FlexShowcase() {
  const [direction, setDirection] = useState('row');
  const [gap, setGap] = useState<ScaleLevel>('medium');

  return (
    <Showcase
      code={`<Flex direction="${direction}" gap="${gap}" wrap>…</Flex>`}
      controls={
        <>
          <ControlSelect
            label="Direction"
            value={direction}
            options={[
              { value: 'row', label: 'Row' },
              { value: 'column', label: 'Column' },
            ]}
            onChange={setDirection}
          />
          <ControlSelect label="Gap" value={gap} options={sizeOptions} onChange={value => setGap(value as ScaleLevel)} />
        </>
      }
    >
      <WindowScene title="Flex">
        <Flex direction={direction as 'row' | 'column'} gap={gap} wrap>
          <Surface style={{ padding: 12, flex: 1 }}>One</Surface>
          <Surface style={{ padding: 12, flex: 1 }}>Two</Surface>
          <Surface style={{ padding: 12, flex: 1 }}>Three</Surface>
        </Flex>
      </WindowScene>
    </Showcase>
  );
}

export function GridShowcase() {
  const [gap, setGap] = useState<ScaleLevel>('medium');
  const [columns, setColumns] = useState('3');

  return (
    <Showcase
      code={`<Grid columns={${columns}} gap="${gap}">…</Grid>`}
      controls={
        <>
          <ControlSelect label="Columns" value={columns} options={[
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
            { value: '4', label: 'Four' },
          ]} onChange={setColumns} />
          <ControlSelect label="Gap" value={gap} options={sizeOptions} onChange={value => setGap(value as ScaleLevel)} />
        </>
      }
    >
      <WindowScene title="Grid">
        <Grid columns={Number(columns)} gap={gap}>
          {Array.from({ length: Number(columns) }, (_, index) => (
            <Surface key={index} style={{ padding: 12 }}>{String.fromCharCode(65 + index)}</Surface>
          ))}
        </Grid>
      </WindowScene>
    </Showcase>
  );
}

export function PopoverShowcase() {
  return (
    <Showcase
      code={`<Popover>
  <Popover.Trigger>Details</Popover.Trigger>
  <Popover.Content>
    <Popover.Dialog aria-label="Connection details">
      <Popover.Title>Connection</Popover.Title>
      <p style={{ margin: "8px 0", fontSize: "0.8125em" }}>Connected to the local System.</p>
      <Popover.Close>Done</Popover.Close>
    </Popover.Dialog>
  </Popover.Content>
</Popover>`}
    >
      <WindowScene title="Popover">
        <Popover>
          <Popover.Trigger size="small">Details</Popover.Trigger>
          <Popover.Content>
            <Popover.Dialog aria-label="Connection details" style={{ padding: 12 }}>
              <Popover.Title>Connection</Popover.Title>
              <p style={{ margin: '8px 0', fontSize: '0.8125em' }}>Connected to the local System.</p>
              <Popover.Close size="small">Done</Popover.Close>
            </Popover.Dialog>
          </Popover.Content>
        </Popover>
      </WindowScene>
    </Showcase>
  );
}

export function MenuShowcase() {
  return (
    <Showcase code={`<Menu aria-label="Document actions">
  <Menu.Item id="rename">Rename</Menu.Item>
  <Menu.Separator />
  <Menu.Item id="delete" color="danger:base">Delete</Menu.Item>
</Menu>`}>
      <Surface style={{ width: 'min(100%, 20rem)', padding: 8 }}>
        <Menu aria-label="Document actions">
          <Menu.Item id="rename">Rename</Menu.Item>
          <Menu.Separator />
          <Menu.Item id="delete" color="danger:base">Delete</Menu.Item>
        </Menu>
      </Surface>
    </Showcase>
  );
}

export function DropdownMenuShowcase() {
  return (
    <Showcase code={`<DropdownMenu>
  <DropdownMenu.Trigger>Actions</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <Menu aria-label="Actions">
      <Menu.Item id="rename">Rename</Menu.Item>
      <Menu.Item id="delete" color="danger:base">Delete</Menu.Item>
    </Menu>
  </DropdownMenu.Content>
</DropdownMenu>`}>
      <WindowScene title="Dropdown Menu">
        <DropdownMenu>
          <DropdownMenu.Trigger size="small">Actions</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <Menu aria-label="Actions">
              <Menu.Item id="rename">Rename</Menu.Item>
              <Menu.Separator />
              <Menu.Item id="delete" color="danger:base">Delete</Menu.Item>
            </Menu>
          </DropdownMenu.Content>
        </DropdownMenu>
      </WindowScene>
    </Showcase>
  );
}

export function ContextMenuShowcase() {
  return (
    <Showcase code={`<ContextMenu>
  <ContextMenu.Trigger><Button>Context actions</Button></ContextMenu.Trigger>
  <ContextMenu.Content>
    <Menu aria-label="Context actions">
      <Menu.Item id="open">Open</Menu.Item>
      <Menu.Item id="inspect">Inspect</Menu.Item>
    </Menu>
  </ContextMenu.Content>
</ContextMenu>`}>
      <WindowScene title="Context Menu">
        <ContextMenu>
          <ContextMenu.Trigger>
            <Button size="small" aria-label="Context actions">Right-click here</Button>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            <Menu aria-label="Context actions">
              <Menu.Item id="open">Open</Menu.Item>
              <Menu.Item id="inspect">Inspect</Menu.Item>
            </Menu>
          </ContextMenu.Content>
        </ContextMenu>
      </WindowScene>
    </Showcase>
  );
}

export function DialogShowcase() {
  const [backdropColor, setBackdropColor] = useState<ControlColor>('foreground:base');

  return (
    <Showcase code={`<Dialog>
  <Dialog.Trigger>Edit profile</Dialog.Trigger>
  <Dialog.Backdrop color="${backdropColor}" isDismissable>
    <Dialog.Content>
      <Dialog.Header><Dialog.Title>Profile</Dialog.Title></Dialog.Header>
      <Dialog.Body>…</Dialog.Body>
      <Dialog.Footer><Dialog.Close>Done</Dialog.Close></Dialog.Footer>
    </Dialog.Content>
  </Dialog.Backdrop>
</Dialog>`}
      controls={<ControlSelect label="Backdrop color" value={backdropColor} options={colorOptions} onChange={value => setBackdropColor(value as ControlColor)} />}
    >
      <WindowScene title="Dialog">
        <Dialog>
          <Dialog.Trigger size="small">Edit profile</Dialog.Trigger>
          <Dialog.Backdrop color={backdropColor} isDismissable>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Profile</Dialog.Title>
                <Dialog.Description>Update the visible details.</Dialog.Description>
              </Dialog.Header>
              <Dialog.Body><Input label="Name" defaultValue="Ada Lovelace" /></Dialog.Body>
              <Dialog.Footer><Dialog.Close>Done</Dialog.Close></Dialog.Footer>
            </Dialog.Content>
          </Dialog.Backdrop>
        </Dialog>
      </WindowScene>
    </Showcase>
  );
}

export function AlertDialogShowcase() {
  return (
    <Showcase code={`<AlertDialog>
  <AlertDialog.Trigger color="danger:base">Delete</AlertDialog.Trigger>
  <AlertDialog.Backdrop>
    <AlertDialog.Content>
      <AlertDialog.Title>Delete permanently?</AlertDialog.Title>
      <AlertDialog.Footer>…</AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Backdrop>
</AlertDialog>`}>
      <WindowScene title="Alert Dialog">
        <AlertDialog>
          <AlertDialog.Trigger size="small" color="danger:base">Delete</AlertDialog.Trigger>
          <AlertDialog.Backdrop>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Delete permanently?</AlertDialog.Title>
                <AlertDialog.Description>This action requires an explicit decision.</AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Close>Cancel</AlertDialog.Close>
                <AlertDialog.Close color="danger:base">Delete</AlertDialog.Close>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Backdrop>
        </AlertDialog>
      </WindowScene>
    </Showcase>
  );
}

export function TooltipShowcase() {
  return (
    <Showcase code={`<Tooltip>
  <Tooltip.Trigger>Info</Tooltip.Trigger>
  <Tooltip.Content>Visible to this Program</Tooltip.Content>
</Tooltip>`}>
      <WindowScene title="Tooltip">
        <Tooltip delay={0}>
          <Tooltip.Trigger size="small">Info</Tooltip.Trigger>
          <Tooltip.Content>Visible to this Program</Tooltip.Content>
        </Tooltip>
      </WindowScene>
    </Showcase>
  );
}

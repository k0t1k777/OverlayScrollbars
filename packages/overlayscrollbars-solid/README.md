<div align="center">
  <a href="https://kingsora.github.io/OverlayScrollbars"><img src="https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/logo/logo.png" width="160" height="160" alt="OverlayScrollbars"></a>
  <a href="https://www.solidjs.com"><img src="https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/packages/overlayscrollbars-solid/logo.svg" width="160" height="160" alt="Vue"></a>
</div>
<br />
<div align="center">

  [![OverlayScrollbars](https://img.shields.io/badge/OverlayScrollbars-%5E2.0.0-338EFF?style=flat-square)](https://github.com/KingSora/OverlayScrollbars)
  [![Solid](https://img.shields.io/badge/Solid-%5E1.5.1-2C4F7C?style=flat-square&logo=solid)](https://github.com/solidjs/solid)
  [![Downloads](https://img.shields.io/npm/dt/overlayscrollbars-solid.svg?style=flat-square)](https://www.npmjs.com/package/overlayscrollbars-solid)
  [![Version](https://img.shields.io/npm/v/overlayscrollbars-solid.svg?style=flat-square)](https://www.npmjs.com/package/overlayscrollbars-solid)
  [![License](https://img.shields.io/github/license/kingsora/overlayscrollbars.svg?style=flat-square)](#)

</div>

# OverlayScrollbars for Solid

This is the official OverlayScrollbars Solid wrapper.

## Installation

```sh
npm install overlayscrollbars-solid
```

## Peer Dependencies

OverlayScrollbars for Solid has the following **peer dependencies**:

- The vanilla JavaScript library: [overlayscrollbars](https://www.npmjs.com/package/overlayscrollbars)

```
npm install overlayscrollbars
```

- The Solid framework: [solid-js](https://www.npmjs.com/package/solid-js)

```
npm install solid-js
```

## Usage

The first step is to import the CSS file into your app:
```ts
import 'overlayscrollbars/overlayscrollbars.css';
```

> __Note__: In older node versions use `'overlayscrollbars/styles/overlayscrollbars.css'` as the import path for the CSS file.

## Component

The main entry point is the `OverlayScrollbarsComponent` which can be used in your application as a component:

```jsx
import { OverlayScrollbarsComponent } from "overlayscrollbars-solid";

// ...

<OverlayScrollbarsComponent>
  example content
</OverlayScrollbarsComponent>
```

### Properties

It has three optional properties: `element`, `options` and `events`.

- `element`: accepts a `string` which represents the tag of the root element.
- `options`: accepts an `object` which represents the OverlayScrollbars options.
- `events`: accepts an `object` which represents the OverlayScrollbars events.

```jsx
// example usage
<OverlayScrollbarsComponent
  element="span"
  options={{ scrollbars: { autoHide: 'scroll' } }}
  events={{ scroll: () => { /* ... */ } }}
/>
```

### Ref

The `ref` of the `OverlayScrollbarsComponent` will give you an object with which you can access the OverlayScrollbars `instance` and the root `element` of the component.  
The ref object has two properties:

- `osInstance`: a function which returns the OverlayScrollbars instance.
- `getElement`: a function which returns the root element.

```jsx
// example usage
import type { OverlayScrollbarsComponentRef } from 'overlayscrollbars-solid';

const Component = () => {
  let ref: OverlayScrollbarsComponentRef | undefined;

  return <OverlayScrollbarsComponent ref={(r) => (ref = r)} />
}
```

## Primitive

In case the `OverlayScrollbarsComponent` is not enough, you can also use the `createOverlayScrollbars` primitive:

```jsx
import { createOverlayScrollbars } from "overlayscrollbars-solid";

// example usage
const Component = () => {
  let div;
  const [params, setParams] = createStore({ options, events });
  const [initialize, instance] = useOverlayScrollbars(params);

  /** 
   * or:
   * 
   * const [params, setParams] = createSignal({});
   * const [initialize, instance] = createOverlayScrollbars(params);
   * 
   * or:
   * 
   * const [options, setOptions] = createSignal();
   * const [events, setEvents] = createSignal();
   * const [initialize, instance] = createOverlayScrollbars({
   *   options,
   *   events,
   * });
   * 
   */

  onMount(() => {
    initialize({ target: div });
  });

  onCleanup(() => {
    instance().destroy();
  });

  return <div ref={div} />
}
```

The primitive is for advanced usage and lets you control the whole initialization process. This is useful if you want to integrate it with other plugins.

### Parameters

Parameters are optional and similar to the `OverlayScrollbarsComponent`.
Its an `object` with two optional properties:

- `options`: accepts an `object` which represents the OverlayScrollbars options.
- `events`: accepts an `object` which represents the OverlayScrollbars events.

> __Note__: The object can be a normal, `store` or `signal` object. This also applies to the `options` and `events` fields.

### Return

The `createOverlayScrollbars` primitive returns a `tuple` with two values:

- The first value is the `initialization` function, it takes one argument which is the `InitializationTarget` and returns the OverlayScrollbars instance.
- The second value is a function which returns the current OverlayScrollbars instance or `null` if not initialized.

## License

MIT
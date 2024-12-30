# LocoUI

`@locoui` is a multi-framework component library designed to simplify data viewing and rendering across multiple platforms. With packages available for React, Vue, and a core shared library, `@locoui` empowers developers to build interactive and scalable UI components to visualize data on-screen.

## Packages

- **@locoui/react**: A set of React components focused on rendering and visualizing data with customizable options.
- **@locoui/vue**: The Vue version of the component library, designed for Vue.js applications.
- **@locoui/core**: Shared logic and utilities used across both the React and Vue versions, ensuring consistency and flexibility in data rendering.

## Installation

### React Package

To install the `@locoui/react` package:

#### Using npm:

```bash
npm install @locoui/react
```

#### Using Yarn:

```bash
yarn add @locoui/react
```

#### Using pnpm:

```bash
pnpm add @locoui/react
```

### Vue Package

To install the `@locoui/vue` package:

#### Using npm:

```bash
npm install @locoui/vue
```

#### Using Yarn:

```bash
yarn add @locoui/vue
```

#### Using pnpm:

```bash
pnpm add @locoui/vue
```

### Core Package

To install the shared `@locoui/core` package:

#### Using npm:

```bash
npm install @locoui/core
```

#### Using Yarn:

```bash
yarn add @locoui/core
```

#### Using pnpm:

```bash
pnpm add @locoui/core
```

## Usage

After installing the appropriate package for your framework, import the components and start using them in your application. Below is a basic example for React:

### Example (React)

```tsx
import { DataTable } from '@locoui/react';

const App = () => (
  <div>
    <h1>Data Viewer</h1>
    <DataTable data={sampleData} />
  </div>
);

export default App;
```

### Example (Vue)

```vue
<template>
  <div>
    <h1>Data Viewer</h1>
    <DataTable :data="sampleData" />
  </div>
</template>

<script>
import { DataTable } from '@locoui/vue';

export default {
  components: { DataTable },
  data() {
    return {
      sampleData: [...]
    };
  }
}
</script>
```

## Contributing

Contributions are welcome! Please submit any issues or pull requests via GitHub.

## Release

To release package updates follow the following steps:

- Run `npm run changeset`.
- When prompted select the package you want to publish and select if the version upgrade will be major, minor or patch
- Commit the change, and push to main
- A new PR for publish will be generated, merge the PR to release new version of packages

---

This is just a starting point for the library. More refinements may be required as we continue to enhance the functionality and expand the component offerings.

---

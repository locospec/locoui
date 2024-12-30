# LoCoLens

`@locolens` is a multi-framework component library designed to simplify data viewing and rendering across multiple platforms. With packages available for React, Vue, and a core shared library, `@locolens` empowers developers to build interactive and scalable UI components to visualize data on-screen.

## Packages

- **@locolens/react**: A set of React components focused on rendering and visualizing data with customizable options.
- **@locolens/vue**: The Vue version of the component library, designed for Vue.js applications.
- **@locolens/core**: Shared logic and utilities used across both the React and Vue versions, ensuring consistency and flexibility in data rendering.

## Installation

### React Package

To install the `@locolens/react` package:

#### Using npm:

```bash
npm install @locolens/react
```

#### Using Yarn:

```bash
yarn add @locolens/react
```

#### Using pnpm:

```bash
pnpm add @locolens/react
```

### Vue Package

To install the `@locolens/vue` package:

#### Using npm:

```bash
npm install @locolens/vue
```

#### Using Yarn:

```bash
yarn add @locolens/vue
```

#### Using pnpm:

```bash
pnpm add @locolens/vue
```

### Core Package

To install the shared `@locolens/core` package:

#### Using npm:

```bash
npm install @locolens/core
```

#### Using Yarn:

```bash
yarn add @locolens/core
```

#### Using pnpm:

```bash
pnpm add @locolens/core
```

## Usage

After installing the appropriate package for your framework, import the components and start using them in your application. Below is a basic example for React:

### Example (React)

```tsx
import { DataTable } from '@locolens/react';

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
import { DataTable } from '@locolens/vue';

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

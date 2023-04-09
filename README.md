# atra.css

A lightly modern reset CSS.

[![npm](https://img.shields.io/npm/v/atra.css?logo=npm)](https://www.npmjs.com/package/atra.css)
![bundle size](https://img.shields.io/bundlephobia/minzip/atra.css)
[![ci](https://github.com/re-taro/atra.css/actions/workflows/ci.yml/badge.svg)](https://github.com/re-taro/atra.css/actions/workflows/ci.yml)

## About

atra.css is a modern CSS library that provides cross-browser default styles.

note: atra is the protagonist of the Atra-Hashith epic. The character who appears in the so-called "Legend of the Flood" and who corresponds to Noah, the protagonist of "Noah's Ark" recorded after the sixth chapter of "Genesis" in the "Old Testament".

## Installation

You can install atra.css using any package manager, or a CDN.

### npm

```
npm install atra.css
```

### CDN

```
https://unpkg.com/atra.css@latest/dist/atra.min.css
```

## Usage

You can use atra.css by importing it into your project.

### Import

```scss
@import '~atra.css';
```

### HTML

```html
<link rel="stylesheet" href="https://unpkg.com/atra.css@latest/dist/atra.min.css" />
```

## Usage with "CSS in JS"

You can also use atra.css with "CSS in JS" libraries like Emotion.

```jsx
import { css, Global } from '@emotion/react';
import resetCSS from 'atra.css/dist/raw';

const globalStyle = css`
  ${resetCSS}
`;

export const CSSReset = () => <Global styles={globalStyle} />;
```

### Variations

It is available in node_modules directory:

* `atra.css`: raw CSS file
* `atra.min.css`: minified CSS file (recommended for production)

## Support

> **Warning**
> Support for modern browsers.

atra.css supports modern browsers, but does not support IE11 or other legacy browsers.

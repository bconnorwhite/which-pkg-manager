<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>which-pkg-manager</h1>
  <a href="https://npmjs.com/package/which-pkg-manager">
    <img alt="NPM" src="https://img.shields.io/npm/v/which-pkg-manager.svg">
  </a>
  <a href="https://github.com/bconnorwhite/which-pkg-manager">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/which-pkg-manager.svg">
  </a>
</div>

<br />

<blockquote align="center">Get the package manager used by a project.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/which-pkg-manager">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/which-pkg-manager?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
npm install which-pkg-manager
```

```sh
yarn add which-pkg-manager
```

```sh
pnpm add which-pkg-manager
```

```sh
bun add which-pkg-manager
```

## Usage
```js
import {
  getPackageManagerName,
  isNPM,
  isYarn,
  isPNPM,
  isBun
} from "which-pm-lockfile";

const pmName = await getPackageManagerName(); // "npm" | "yarn" | "pnpm" | "bun" | undefined

const npm = await isNPM(); // true | false
const yarn = await isYarn(); // true | false
const pnpm = await isPNPM(); // true | false
const bun = await isBun(); // true | false
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/which-pkg-manager?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/which-pkg-manager.svg"></a></h2>

- [read-json-safe](https://www.npmjs.com/package/read-json-safe): Read JSON files without try catch
- [root-pkg-json](https://www.npmjs.com/package/root-pkg-json): Find the highest package.json, starting from from the current working directory.
- [which-pm-lockfile](https://www.npmjs.com/package/which-pm-lockfile): Check if a project uses yarn, npm, or pnpm

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/which-pkg-manager.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

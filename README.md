# some-sass-scoped-pkg-imports-issue

## Set up mise, Node.js and pnpm

We use [mise](https://mise.jdx.dev) to manage which versions of [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io) are used to work on this project.

1. [Install `mise` CLI](https://mise.jdx.dev/getting-started.html).
2. Open a new terminal in your working copy for this repository.
3. Run `mise trust`.
   - `mise` will print: `mise trusted /path/to/your/design-tokens`
4. Run `mise install`.
   - `mise` will download and install both `node` and `pnpm`.
5. Run `mise ls --local --installed`.
   - `mise` will print a table of which versions of `node` and `pnpm` have been installed.

## Install JavaScript dependencies with pnpm

Now that mise tools are installed, run `pnpm install` to install JavaScript packages.

```
pnpm install
```

## Describe the bug

This repository contains a [vite-app](./packages/vite-app/) which depends upon an in-workspace scoped package named [@nyt/library](./packages/library/). We `@use` an import from this library in [packages/vite-app/src/index.scss](./packages/vite-app/src/index.scss#L1).

Using the Some Sass VSCode extension version 4.3.9 and VSCode version 1.120.0 on macOS Tahoe 26.5, the aforementioned `@nyt/library` scoped package doesn't appear to be recognized as a valid [`pkg:` import suggestion](https://wkillerud.github.io/some-sass/user-guide/completions.html#pkg-imports). When typing `@use "pkg:"`, I see a package name flyout appear:

<img width="270" height="292" alt="Image" src="https://github.com/user-attachments/assets/9dbd2f72-e493-4c37-969d-f2559de58b26" />

However, when selecting the package scope (`@nyt` in my case), the autocomplete "trail" goes cold. If I type the full name of the package and an associated export, e.g. `@use "pkg:@nyt/library/tokens/color";`, Some Sass does not support Go To Definition on the `pkg:` import, either.

## What's the expected result?

I expect that Some Sass would recognize scoped packages within the local `node_modules` subfolder, for purposes of autocompleting a `pkg:` import path and other language service features such as Go To Definition and Sass module member autocompletion.

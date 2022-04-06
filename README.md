# Precisely Website

This repository contains the code for Precisely's website at https://www.precise.ly/.

## Developing

Once you've installed dependencies with `yarn`, start a development server:

```bash
yarn dev
```

## Building

To create a production version of the app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

## Updating SVGs

Some SVGs may not be updated through hot reloading. Clear the svelte-kit cache by running the command below.

```
rm -rf .svelte-kit
```

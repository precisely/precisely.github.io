# Precisely Website

This repository contains the code for Precisely's website at https://www.precise.ly/. The preview link of the website is https://precisely.github.io/.

## Development

Once you've installed dependencies with `yarn`, start a development server:

```bash
yarn dev
```

## Build

To create a production version of the app:

```bash
yarn build
```

The file output will be in the `build` folder.

You can preview the production build with `yarn preview`.

## Deployment

We currently use Github Pages for static site hosting. After creating a build, run the command below to automatically push the contents in the build folder to the `gh-pages` branch.

```bash
yarn deploy
```

Configure the domain in `static/CNAME`.

Make sure to preview on Safari before deployment. Known bugs are

- SVG clip-path doesn't render correctly - SVG's with clip-path attributes are clipped beyond their specifications after a page rerender. Seems to be resolved by removing the clip-path attribute entirely.

## Updating SVGs

Some SVGs may not be updated through hot reloading. Clear the svelte-kit cache by running the command below.

```
rm -rf .svelte-kit
```

## FAQ

`static/.nojekyll` tells Github pages to not use the Jekyll site generator.

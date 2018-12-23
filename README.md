<p align="center">
  <img src="public/img/logo.png" width="500" align="center">
</p>


# REW - Electron, React and Webpack boilerplate

A minimal jump-start boilerplate based on Electron + Webpack + React for building Cross-Platform Desktop Apps

<p align="center">
  <img src="public/img/screenshot.png" width="100%" align="center">
</p>

## Table of Contents

* [Install](#install)
* [Start Development](#start-development)
* [Packaging for Production](#packaging-for-production)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

## Install

First, clone the repo via git:
```
git clone https://github.com/hcorta/REW-electron-boilerplate
```

And then install the dependencies with yarn.
```
$ cd your-project-name
$ yarn
```

## Start Development

Start the app in the dev environment. This starts the renderer process in hot-module-replacement mode and starts a webpack dev server that sends hot updates to the renderer process:

```
$ yarn start
```

## Packaging for Production

To package apps for the local platform:

```
$ yarn run package
```


## Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

MIT © [Hugo Corta](https://github.com/hcorta).

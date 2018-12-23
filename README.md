<p align="center">
  <img src="public/img/logo.png" width="400" align="center">
</p>
<br>
<br>



<div align="center">

<h1>REW Boilerplate - Electron, React and Webpack App</h1>

[![Build Status](https://travis-ci.com/hcorta/REW-electron-boilerplate.svg?branch=master)](https://travis-ci.com/hcorta/REW-electron-boilerplate)
[![dependencies Status](https://david-dm.org/hcorta/REW-electron-boilerplate/status.svg?style=flat-square)](https://david-dm.org/hcorta/REW-electron-boilerplate)
[![devDependencies Status](https://david-dm.org/hcorta/REW-electron-boilerplate/dev-status.svg?style=flat-square)](https://david-dm.org/hcorta/REW-electron-boilerplate?type=dev)

A minimal jump-start boilerplate based on Electron + Webpack + React for building Cross-Platform Desktop Apps

<p align="center">
  <img src="public/img/screenshot.png" width="100%" align="center">
</p>
<br>

</div>

## Table of Contents

* [Install](#install)
* [Structure](#structure)
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

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.boilerplate.js
│   └── jquery.boilerplate.min.js
├── src/
│   ├── jquery.boilerplate.coffee
│   └── jquery.boilerplate.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

## Starting Development

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

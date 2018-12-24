<div align="center">
  <img src="public/img/logo.png" width="100%" align="center">
  <p>A minimal jump-start boilerplate based on Electron + Webpack + React for building Cross-Platform Desktop Apps</p>
</div>

<div align="center" style="display: flex; justify-content: space-evenly">

  [![Build Status](https://travis-ci.com/hcorta/REW-electron-boilerplate.svg?branch=master)](https://travis-ci.com/hcorta/REW-electron-boilerplate)
  [![dependencies Status](https://david-dm.org/hcorta/REW-electron-boilerplate/status.svg)](https://david-dm.org/hcorta/REW-electron-boilerplate)
  [![devDependencies Status](https://david-dm.org/hcorta/REW-electron-boilerplate/dev-status.svg)](https://david-dm.org/hcorta/REW-electron-boilerplate?type=dev)
  [![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>

<br>

<p align="center" style="box-shadow:0px 4px 10px rgba(0,0,0,0.35)">
  <img src="public/img/screenshot.png" width="100%" align="center">
</p>

<br>

## Table of Contents

* [Install](#install)
* [Start Development](#start-development)
* [Packaging for Production](#packaging-for-production)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

<br>

## Overview
Modern web development practices today require a lot of setup with things like webpack to bundle your code, babel for transpiling, eslint for linting, and so much more that the list just goes on. Unfortunately when creating electron applications, all of that setup just became much more difficult. 

The primary aim of electron-webpack is to eliminate all preliminary setup with one simple install so you can get back to developing your application.

<br>

## Install

Create a directory of your choice, and copy template using curl:

```
$ mkdir my-project && cd my-project
curl -fsSL https://github.com/electron-userland/electron-webpack-quick-start/archive/master.tar.gz | tar -xz --strip-components 1
```


or copy template using git clone:

```
git clone https://github.com/hcorta/rew-electron-boilerplate
$ cd rew-electron-boilerplate
```

<br>

And then install the dependencies with `yarn` *(recommended)*.

```
$ yarn
```

<br>

After completing this steps, you will find this initial project structure:

```
root
├── .babel.rc
├── .eslintrc
├── .gitignore
├── .travis.yml
├── LICENSE
├── main.js
├── package.json
├── postcss.config.js
├── README.md
└── yarn.lock
├── config/
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist/
│   ├── jquery.boilerplate.js
│   └── jquery.boilerplate.min.js
└── src
    ├── App.css
    ├── App.js
    └── index.js
```

Just the files you need to build your app with no configuration needed.

<br>

## Starting Development

Start the app in the dev environment. This starts the renderer process in hot-module-replacement mode and starts a webpack dev server that sends hot updates to the renderer process:

```
$ yarn start
```

<br>

## Packaging for Production

To package apps for the local platform:

```
$ yarn run package
```

<br>

## Contributing
**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

<br>

## Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

<br>

## License

**REW-electron-boilerplate** is open source software licensed as MIT © [Hugo Corta](https://github.com/hcorta).

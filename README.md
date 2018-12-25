# REW Electron Boilerplate

<div align="center">
  <img src="public/img/rew-header.png" width="100%" align="center">
  <p>A minimal jump-start boilerplate based on Electron + Webpack + React for building Cross-Platform Desktop Apps</p>
</div>

<div align="center">

  [![Build Status](https://travis-ci.com/hcorta/rew-electron-boilerplate.svg?branch=master)](https://travis-ci.com/hcorta/rew-electron-boilerplate)
  [![dependencies Status](https://david-dm.org/hcorta/rew-electron-boilerplate/status.svg)](https://david-dm.org/hcorta/rew-electron-boilerplate)
  [![devDependencies Status](https://david-dm.org/hcorta/rew-electron-boilerplate/dev-status.svg)](https://david-dm.org/hcorta/rew-electron-boilerplate?type=dev)
  [![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>

<br>

<div align="center" style="box-shadow:0px 4px 10px rgba(0,0,0,0.5)">
  <img src="public/img/screenshot.png" width="100%">
</div>

<br>

***

## Table of Contents 📚

* [Overview](#overview-📜)
* [Install](#install-⚙️)
* [Starting Development](#starting-development-🔨)
* [Packaging for Production](#packaging-for-production-📦)
* [Contributing](#contributing-🖇)
* [Code of Conduct](#code-of-conduct-📐)
* [License](#license-📝)

<br>

## Overview 📜

Modern web development technologies have evolved incredibly fast in the last few years in such a way that we can now create cross-platform desktop apps using resources originally thought for web browsers.

Nevertheless, this usually require a lot of setup to make things work: Webpack to bundle your code, Babel for transpiling, Eslint for linting...  Not to mention that when creating Electron applications, all of that setup just becomes more difficult.

The primary aim of *rew-electron-boilerplate* is to eliminate all preliminary setup with one simple install so you can focus in developing your application.

<br>

## Install ⚙️

Download the repo using git clone in a directory of your choice:

```
git clone https://github.com/hcorta/rew-electron-boilerplate YOUR_PROJECT_NAME
cd YOUR_PROJECT_NAME
```

<br>

Install dependencies (**`yarn`** *recommended*):

```
yarn
```

...and, you're ready to go!

<br>

The basic structure of the project is provided in the following way. No configuration needed, just the files you need to build your app.

```
YOUR_PROJECT_NAME
├── config/
│   ├── .babelrc
│   ├── .eslintrc           //List of rules used by JSHint to detect errors and potential problems in JavaScript.
│   ├── postcss.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── electron/
│   ├── main.js
│   └── menu.js
├── public/
│   ├── docs/
│   └── img/
├── src/                     //Files within this folder get transpiled or compiled
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore               //List of files that we don't want Git to track.
├── .travis.yml
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
```

<br>

## Starting Development 🔨

To start the app in development environment run:

```
yarn start
```

That' all! This starts the renderer process in hot-module-replacement mode and starts a webpack dev server watching for changes that sends hot updates to the renderer process.

<br>

## Packaging for Production 📦

To package the app for the local platform in `/builds`:

```
yarn package
```

In order to manually build into `/dist` your App, you may run:

```
yarn build
```

<br>

## Contributing 🖇

No one’s perfect. If you’ve found any errors, want to suggest enhancements, or expand on a topic, please feel free to open an Issue or collaborate by PR.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

<br>

## Code of Conduct 📐

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

<br>

## License 📝

**rew-electron-boilerplate** is open source software licensed as MIT © [Hugo Corta](https://github.com/hcorta).

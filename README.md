<div align="center">
  <img src="public/img/logo.png" width="100%" align="center">
  <p>A minimal jump-start boilerplate based on Electron + Webpack + React for building Cross-Platform Desktop Apps</p>
</div>
<br>

<div align="center">

  [![Build Status](https://travis-ci.com/hcorta/REW-electron-boilerplate.svg?branch=master)](https://travis-ci.com/hcorta/REW-electron-boilerplate)
  [![dependencies Status](https://david-dm.org/hcorta/REW-electron-boilerplate/status.svg)](https://david-dm.org/hcorta/REW-electron-boilerplate)
  [![devDependencies Status](https://david-dm.org/hcorta/REW-electron-boilerplate/dev-status.svg)](https://david-dm.org/hcorta/REW-electron-boilerplate?type=dev)
  [![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

  <p align="center">
    <img src="public/img/screenshot.png" width="100%" align="center">
  </p>
  <br>

</div>

***
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
$ cd REW-electron-boilerplate
$ yarn
```

Inside the `REW-electron-boilerplate` folder, it will generate the initial project structure and install the transitive dependencies:

```
REW-electron-boilerplate
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
No configuration or complicated folder structures, just the files you need to build your app.


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

## Contributing
**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)


## Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

REW-electron-boilerplate is open source software licensed as MIT © [Hugo Corta](https://github.com/hcorta).

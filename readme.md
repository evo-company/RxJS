[![Build Status](https://travis-ci.org/Reactive-Extensions/RxJS.svg)](https://travis-ci.org/Reactive-Extensions/RxJS)
[![GitHub version](https://img.shields.io/github/tag/reactive-extensions/rxjs.svg)](https://github.com/Reactive-Extensions/RxJS)
[![NPM version](https://img.shields.io/npm/v/rx.svg)](https://www.npmjs.com/package/rx)
[![Downloads](https://img.shields.io/npm/dm/rx.svg)](https://www.npmjs.com/package/rx)
[![Bower](https://img.shields.io/bower/v/rxjs.svg)](http://bower.io/search/?q=rxjs)
[![NuGet](https://img.shields.io/nuget/v/RxJS-All.svg)](http://www.nuget.org/packages/RxJS-All/)
[![Join the chat at https://gitter.im/Reactive-Extensions/RxJS](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Reactive-Extensions/RxJS?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> :warning: This fork was created for custom build for @evo. The main reason for creating custom build is reducing the bundle size. None code of the original sources was modified. All included methods for custom builds are stored in [custom-builds](https://github.com/evo-company/RxJS/tree/master/custom-builds) folder.

> *Custom builds*:
> * [dist/rx.prom.js](https://github.com/evo-company/RxJS/blob/master/dist/rx.prom.js) `npm run build:prom`

# Deploy
Travis ci is configured to publish package on a new tag

```
npm run build:prom
// ... or your custom build
npm version patch|minor|major
git push origin master
git push origin <your tag>
```

# NOTE: The latest version of RxJS can be found [here](https://github.com/reactivex/rxjs)

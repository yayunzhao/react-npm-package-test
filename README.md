# For the publication of customized react components as npm package

The package is based on [npm-base](https://github.com/kadirahq/npm-base) package by [Kadira](https://github.com/kadirahq) which is really great when you want to prepare Npm package. This one is prepared to be used as a starting point for React components which needs to be published on Npm.

It includes linting with [ESLint](http://eslint.org/) and testing with [Mocha](https://mochajs.org/), [Enzyme](http://airbnb.io/enzyme/) and [JSDOM](https://github.com/tmpvar/jsdom).

Also there is ES6 transpilation as well.

## Usage

1. Clone this repo
2. Inside cloned repo run `npm install && rm -rf .git && git init` and update `package.json` with your package name.
3. If you want to run tests: `npm test` or `npm run testonly` or `npm run test-watch`. You need to write tests in `__tests__` folder. You need at least Node 4 on your machine to run tests.
4. If you want to run linting: `npm test` or `npm run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. If you want to run transpilation to ES5 in `dist` folder: `npm run prepublish` (standard npm hook).


## License

MIT

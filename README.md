# pegasus-js

![GitHub repo size](https://img.shields.io/github/repo-size/gbrasil720/pegasus-js?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/gbrasil720/pegasus-js?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/gbrasil720/pegasus-js?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/gbrasil720/pegasus-js?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/gbrasil720/pegasus-js?style=for-the-badge)

> pegasus-js is a simple node.js package that promise help in your daily coding experience, provides you some "plug-in-play" functions, that you can just import and use everywhere

### Adjustments and improvements

The project still in development and the next updates will be focused in:

- [ ] New node.js features
- [ ] Firsts react.js functions
- [x] Tests

## 💻 Pre-requisites

Before start, verify that you attend all the follow requisites:

- You have a recent version of node.js installed `16.13.1`
- You have [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) or [npm](https://www.npmjs.com/) installed in your pc

## 🚀 Installing pegasus-js

To install pegasus-js, just follow this steps:

Using yarn:

```
yarn add pegasus-js
```

Using npm:

```
npm install pegasus-js
```

## ⚡ Possible imports
- [x] Generators
- [x] Validators
- [x] Logger
- [x] LogProvider

```ts
import { Validators } from 'pegasus-js'

const validator = new Validators()

validator.isDate('dawdawda') // false
```

## ⚠️ ATTENTION

> Before using pegasus-js, you need to install <bold>tslib</bold>:

```sh
yarn add -D tslib
```

## ☕ Using pegasus-js

To use pegasus-js functions, just follow this steps:

```ts
import { Method } from 'pegasus-js' // change "Method" to a real lib method

const instance = new Method() // some methods need options in class constructor

instance.function() // change "function" to a real method function
```

## 🤝 Colaborators

Thanks for all the colaborators that made a incredible job building this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/gbrasil720.png" width="100px;" alt="Avatar"/><br>
        <sub>
          <b>Guilherme Brasil</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 😄 Become a contributor<br>

Want to be part of this project? Click [HERE](CONTRIBUTING.md) and read how to contribute.

## 📝 License

This project is under license. Read the file [LICENSE](LICENSE.md) for more details.

[⬆ Back to the top](#pegasus-js)<br>

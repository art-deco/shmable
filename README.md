# @artdeco/shmable

[![npm version](https://badge.fury.io/js/@artdeco/shmable.svg)](https://www.npmjs.com/package/@artdeco/shmable)

`@artdeco/shmable` is Consumer Of Babel Bug.

```sh
yarn add @artdeco/shmable
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async shmable(config: !Config): string`](#async-mynewpackageconfig-config-string)
  * [`Config`](#type-config)
- [CLI](#cli)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import shmable from '@artdeco/shmable'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code>async <ins>shmable</ins>(</code><sub><br/>&nbsp;&nbsp;`config: !Config,`<br/></sub><code>): <i>string</i></code>
Consumer Of Babel Bug.

 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">!Config</a></code></em>: The config.

__<a name="type-config">`Config`</a>__: Options for the program.


|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| text      | <em>string</em>  | A text to return. | -       |

```js
import shmable from '@artdeco/shmable'

(async () => {
  const res = await shmable({
    text: 'example',
  })
  console.log(res)
})()
```
```
@artdeco/shmable called with example
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="art-deco"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>
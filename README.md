# YubiaiStyle

## About / Sobre


[EN]


[ES]

Libreria de componentes con Typescript para usar en los proyectos de YUBIAI con MaterialUI

Storybook agregado para visualizar los componentes y subido a ghPage

[https://yubiai.github.io/yubiaiStyle/
](https://yubiai.github.io/yubiaiStyle/
)

## Quick Start

```bash
- git clone repo
- npm install
- npm run storybook
```

## Test

```bash
- npm run test
```

## Publish new version in npm

New Commit and changing the version in package.json

(If you are not logged in to npm, log in.)

```bash
- npm run test
- npm run rollup
- npm publish
```

## Deploy in ghPage

(Create token from your github account)

```bash
- npm run deploy-storybook -- --ci --host-token-env-variable=token_github
```


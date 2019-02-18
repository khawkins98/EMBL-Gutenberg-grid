# embl-grid for WordPress

A simple Gutenberg plugin to implement the [EMBL Grid for the Visual Framework 2.0](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/components/detail/embl-grid.html).

## How?

This adds a block to Gutenberg that allows you to:

- specify which EMBL Grid variant to use
- inside this block, child block can be added

## Developing this plugin

Bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block); below you will find some information on how to run scripts.

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

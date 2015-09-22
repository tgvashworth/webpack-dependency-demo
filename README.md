# webpack duplicate dependency issue

Dependency tree:

```
    A <- entry
   / \
  B   C
     /
    B
```

- `npm install && npm link` in `B` and `C`
- `npm install && npm link @demo/B @demo/C` in `A`
- `webpack` in `A`

Look at `A/dist/out.js` — it will contain 2 versions of `B`, even though `C` and `A` depend on the same one.

Removing the `babel-loader` from `A`'s `webpack.config.js` works.

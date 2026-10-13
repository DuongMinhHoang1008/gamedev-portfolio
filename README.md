# Unity Game Developer portfolio

This repository contains a static Vue application: `index.html`, precompiled Vue
bundles in `js/`, and styles/assets in `css/`, `img/`, and `d/`. The original
`.vue` sources, source maps, package manifest, and original compilation pipeline
are not present. `js/about.d5804f2d.js` currently holds page rendering and project
data; `js/translations.en.js` and `js/i18n.js` provide Vietnamese/English support.

Run `node build.cjs` to validate JavaScript syntax and package the maintained
static files into `dist/`. This does not recompile the missing Vue sources.
Run `node preview.cjs` for the local site at
`http://127.0.0.1:8080/gamedev-portfolio/`.

With the existing `vue` dependency available, run:

```sh
node tests/project-popups.cjs
node tests/language.cjs
node tests/site-assets.cjs
```

The current CV is `d/UNITY GAME DEVELOPER.pdf`; keep its URL consistent in both
languages. The thesis is `d/22021218_Duong_Minh_Hoang.pdf`.

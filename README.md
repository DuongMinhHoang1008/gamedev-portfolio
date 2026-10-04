# What is this ?
This is a portfolio template that you can use to showcase your work, especially if it's comprised of projects that should be shown in a very visual way.

Looking for a game developer job, I needed a portfolio to present my work to recruiters. I found a lot of custom made portfolios, but no easy to use template unless I used Wordpress. Which was overkill to me because a static HTML/JS website would do fine.

So i created my own using VueJS, keeping in mind that I wanted it to be easily customisable so other people can use this as a base to make their own. It's very simple, static, fast and responsive.

For a real world use case, check my portfolio: https://schouffy.github.io


# How to use

1. Install

    - Fork or duplicate the repository
    - npm install
    - npm run serve
    - If any issue with serve, please read this: https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported For Windows Powershell, you can fix with `$env:NODE_OPTIONS = '--openssl-legacy-provider'` then `npm run serve`

2. Customize
* For the content
    - Except for the projects pages, everything is static HTML that you can edit directly in the views and components files
    - For the projects pages, the page is dynamically populated at runtime using data stored in Typescript files (data/GameProjectsData.ts and data/OtherProjectsData.ts). Make the changes directly in these .ts files
    - Static files (images, icons, downloadables,..) should be placed in /public folder.
    - Make the necessary changes in the .env file (this is mostly the site metadata). You need to "npm run serve" again when updating this file.

* For the style
    - The basic colors can be edited in the css/variables.less file.
    - The rest of the CSS can be edited, if need be, directly inside each view and component.
    - If you place custom CSS in your projects HTML data (that will be displayed in an overlay dialog), you must add the definition for this CSS in the css/projects.less file

* Additional info & optimizations
    - Images will be loaded on-demand when you switch tabs. It means if you have big images or animated gifs, you may want to preload them so the user sees them faster when they change tabs. To do this, you can call Helpers.preloadImages in app.vue to preload heavy images.

3. Deploy

    - Follow the [Vue CLI GitHub Pages guide](https://cli.vuejs.org/guide/deployment.html#github-pages). Production builds use `/gamedev-portfolio/`; local development uses `/`.
    - Install dependencies with `npm ci`. Use Node.js 22 and Git; on Windows, run the deploy command in Git Bash. Configure your Git name/email and authenticate with GitHub before deploying.
    - Run `npm run deploy`. The script builds the site, adds `.nojekyll`, and force-pushes only the generated `dist` content to `gh-pages`, replacing that branch's deployment history. It enables the OpenSSL legacy provider for Vue CLI 4 on Node.js 17+.
    - After the first deploy, open the repository's **Settings > Pages**, select **Deploy from a branch**, then choose **gh-pages** and **/ (root)** and save.
    - Website: https://DuongMinhHoang1008.github.io/gamedev-portfolio/
    - Vue Router uses hash routing, so links such as `/gamedev-portfolio/#/resume` work when opened directly or refreshed.
    - If you rename the repository, update `publicPath` in `vue.config.js`, the remote URL in `deploy.sh`, and `VUE_APP_PRODUCTION_URL` in `.env.production`.
    - To build without publishing, run `npm run build` and use the generated `dist` folder. On modern Node.js in PowerShell, first run `$env:NODE_OPTIONS = '--openssl-legacy-provider'`.


# License

This is GNU LGPL, check the LICENSE file.

Please consider keeping the link to this repository at the bottom of your portfolio, so other people can find and use this template too. Of course it's not mandatory though.

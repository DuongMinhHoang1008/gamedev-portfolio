#!/usr/bin/env sh

# Abort on errors and always build from the project root.
set -eu
cd "$(dirname "$0")"

# Vue CLI 4 / webpack 4 needs the legacy provider with Node.js 17+.
if [ "$(node -p 'Number(process.versions.node.split(".")[0])')" -ge 17 ]; then
  export NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--openssl-legacy-provider"
fi

npm run build
cd dist
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

# Publish only the generated site; replace the gh-pages branch.
git push -f https://github.com/DuongMinhHoang1008/gamedev-portfolio.git HEAD:gh-pages

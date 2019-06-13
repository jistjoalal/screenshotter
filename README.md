# Screenshotter

A web API for easily screenshotting web pages.

- **Built with**: [Express](https://expressjs.com/) + [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- **Built by**: a lazy programmer who's tired of updating readme screenshots.

## Demo

[![screenshot loading / heroku app waking up...](https://jist-screenshotter.herokuapp.com/https://jist-screenshotter.herokuapp.com/)](https://jist-screenshotter.herokuapp.com/)

- This screenshot is automatically **live-generated** using the API. Meta!

```
![screenshot](https://jist-screenshotter.herokuapp.com/https://jist-screenshotter.herokuapp.com/)
```

## Develop

```bash
git clone https://github.com/jistjoalal/screenshotter
cd screenshotter
npm install
npm run develop
```

## Deploy

Automatic deploys with [Heroku](https://devcenter.heroku.com/articles/github-integration#automatic-deploys) upon pushes to `master` branch.

## dev notes / todos

- autocomplete forms off
- refactor routes
- add version to API routes
- markdown/html embed copypasta on preview page
- save pngs to s3/imgur/etc.?
- compress screenshots?
- api route (returns json)
- save by time
  - archive like wayback machine
- pass params to puppeteer
  - page size, device, etc.
- look into nest.js

## learning

Deploying was a pain. Working on heroku w/ the following tricks:

- [Buildpacks, puppeteer config](https://stackoverflow.com/a/55090914)
- Ensure screenshots folder exists before writing
  - Can't commit empty dir to git, had to be manual

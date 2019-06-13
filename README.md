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

- Don't want me screwing up your links? Use the versioned API in case I make breaking changes:

```
https://jist-screenshotter.herokuapp.com/v1/
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

- refactor screenshotter to make one request for desktop+mobile?
- prevent inf. loops (preview > preview > ...)
- api route (returns json)
- save by time
  - archive like wayback machine
- pass params to puppeteer
  - page size, device, etc.
- save pngs to s3/imgur/etc.?
- compress screenshots?
- look into nest.js?
- Kaffeine to keep heroku app online?

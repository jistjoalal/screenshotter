# Screenshotter

A web API for easily screenshotting web pages.

- **Built with**: [Express](https://expressjs.com/) + [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- **Built by**: a lazy programmer who's tired of updating readme screenshots.

## Demo

[![Screenshot](https://jist-screenshotter.herokuapp.com/desktop/https://jist-screenshotter.herokuapp.com/)](https://jist-screenshotter.herokuapp.com/)

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

## dev notes / todos / ideas

- leave a note about inception limit
- preview page looks weird when you preview it
- enable experimental modules syntax
- howto force github no-cache?
  - set Cache-Control header max-age
- pass params to puppeteer
  - page size, device, etc.
  - allow a waiting period for data to load?
- api preview route (returns json)
- ssr route
- isolate front-end
  - customizable embed tags + urls
    - w/ inputs (use link, size, alt, etc.)
- save by time
  - archive like wayback machine
- look into nest.js?
- Kaffeine to keep heroku app online?

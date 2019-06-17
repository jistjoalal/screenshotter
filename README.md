# Screenshotter

A web API for easily screenshotting web pages.

- **Built with**: [Express](https://expressjs.com/) + [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- **Built by**: a lazy web developer who's tired of updating readme screenshots.
- **Built like**: the now obsolete(?) [Puppeteer as a service](https://github.com/GoogleChromeLabs/pptraas.com) app built by [Eric Bidelman](https://github.com/ebidel). Check out his [talk](https://www.youtube.com/watch?v=lhZOFUY1weo) @ Google I/O '18 to see how cool Puppeteer is!

## Demo

[<img src="https://jist-screenshotter.herokuapp.com/v1/desktop/https://jist-screenshotter.herokuapp.com/" alt="Screenshot" width="500" />](https://jist-screenshotter.herokuapp.com/)

- This screenshot is automatically **live-generated** using the API. Meta!

```
![Screenshot](https://jist-screenshotter.herokuapp.com/mobile/https://jist-screenshotter.herokuapp.com/
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

- tests!
  - [x] screenshotter
  - [x] routes
  - [ ] express server?
  - [ ] previews?
  - [ ] index.html?
  - [ ] end-to-end?
  - [ ] hook up CI
- pass params to puppeteer
  - page size, device, etc.
  - allow a waiting period for data to load?
- api preview route (returns json)
- ssr route
- pdf route
- google search bot route
- page metrics / lighthouse report route
- isolate front-end
  - customizable embed tags + urls
    - w/ inputs (use link, size, alt, etc.)
- save by time
  - archive like wayback machine
  - useful for caching on my end, could send param to refresh
  - could store on s3/imgur
- look into nest.js?
- Kaffeine to keep heroku app online?

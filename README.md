[![Build Status](https://travis-ci.com/jistjoalal/screenshotter.svg?branch=master)](https://travis-ci.com/jistjoalal/screenshotter)

# Screenshotter

A web API for easily screenshotting web pages.

- **Built with**: [Express](https://expressjs.com/) + [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- **Built by**: a lazy web developer who's tired of updating readme screenshots.
- **Built like**: the now obsolete(?) [Puppeteer as a service](https://github.com/GoogleChromeLabs/pptraas.com) app built by [Eric Bidelman](https://github.com/ebidel). Check out his [talk](https://www.youtube.com/watch?v=lhZOFUY1weo) @ Google I/O '18 to see how cool Puppeteer is!

[<img src="https://jist-screenshotter.herokuapp.com/v1/desktop/https://jist-screenshotter.herokuapp.com/" alt="Screenshot" width="500" />](https://jist-screenshotter.herokuapp.com/)

- This screenshot is automatically **live-generated** using the API. Meta!

```
![Screenshot](https://jist-screenshotter.herokuapp.com/mobile/https://jist-screenshotter.herokuapp.com/
```

## Develop

```bash
git clone https://github.com/jistjoalal/screenshotter
cd screenshotter
npm install
npm run develop
```

## Tests

```bash
npm test
```

## Deploy

Continuous Integration with [Heroku](https://devcenter.heroku.com/articles/github-integration#automatic-deploys) and [Travis-CI](https://travis-ci.com).

- Deployments happen automatically upon successful builds in the staging environment.

## dev notes / todos / ideas

- [x] SSR route
  - [x] DOM, links, styles rendering properly
  - [ ] get scripts to work
  - ^ how to test these? ^
- [ ] pdf route
- [ ] google search bot route
- [ ] page metrics / lighthouse report route
- pass params to puppeteer
  - page size, device, etc.
  - allow a waiting period for data to load?
- isolate front-end
  - customizable embed tags + urls
    - w/ inputs (use link, size, alt, etc.)
- save by time
  - archive like wayback machine
  - useful for caching on my end, could send param to refresh
  - could store on s3/imgur
- look into nest.js?
- Kaffeine to keep heroku app online?

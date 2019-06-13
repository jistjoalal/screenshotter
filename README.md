# Screenshotter

A web API for easily screenshotting web pages.

- **Built with**: [Express](https://expressjs.com/) + [Puppeteer](https://github.com/GoogleChrome/puppeteer)
- **Built by**: a lazy programmer who's tired of updating readme screenshots.

## Demo

[![screenshot](https://jist-screenshotter.herokuapp.com/https://jist-screenshotter.herokuapp.com/)](https://jist-screenshotter.herokuapp.com/)

- This screenshot is automatically **live-generated** using the API. Meta!

```
![screenshot](https://jist-screenshotter.herokuapp.com/https://jist-screenshotter.herokuapp.com/)
```

## dev notes / todos

- autocomplete forms off
- refactor routes
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

# My portfolio website

[![CI/CD](https://github.com/corentin-regent/portfolio/actions/workflows/cicd.yml/badge.svg)](https://github.com/corentin-regent/portfolio/actions/workflows/cicd.yml)
[![Lighthouse](https://github.com/corentin-regent/portfolio/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/corentin-regent/portfolio/actions/workflows/lighthouse.yml)

This is the GitHub repository for
[my portfolio website](https://corentin-regent.github.io/portfolio/). It was made with the
[SvelteKit](https://kit.svelte.dev/) framework, pre-rendered and built as a static website, and
hosted on [GitHub Pages](https://docs.github.com/en/pages).

The website was designed with performance, accessibility and SEO in mind, therefore it works just
fine [when Javascript is unavailable](https://www.kryogenix.org/code/browser/everyonehasjs.html).
Javascript users will have their experience improved though, thanks to progressive enhancement.

## Lighthouse audits

Audits from [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) on every
deployment of the website. Here are the results of the latest execution:

![Latest Lighthouse report](/img/lighthouse-report.svg)

These scores are computed as follows:

- Three Lighthouse audits are run on each page
- Out of these three reports, only the median one is selected
- The final scores of the website are the average of the scores from each page's median report.

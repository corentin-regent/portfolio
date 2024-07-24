# My portfolio website

⚠️ The website is a Work In Progress.

This is the GitHub repository for
[my portfolio website](https://corentin-regent.github.io/portfolio/). It was made with the
[SvelteKit](https://kit.svelte.dev/) framework, pre-rendered and built as a static website, and
hosted on [GitHub Pages](https://docs.github.com/en/pages).

The website was designed with performance, accessibility and SEO in mind, therefore it works just
fine [when Javascript is unavailable](https://www.kryogenix.org/code/browser/everyonehasjs.html).
Javascript users will have their experience improved though, thanks to progressive enhancement.

## Lighthouse audits

Audits from [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) are run
automatically as a part of the Continuous Integration process.

Below are the current scores of my portfolio website:

![Latest Lighthouse report](/docs/lighthouse-report.png)

These scores are computed as follows:

- Three Lighthouse audits are run on each page
- Out of these three reports, only the median one is selected
- The final scores of the website are the average of the scores from each page's median report.

During this process, the static website is served over localhost by an Nginx container, by the
virtual machine provided by GitHub Actions. Therefore, while the Performance score can provide an
insight regarding good practices adopted for improved speed, network-dependant indicators such as
the time for First Contentful Paint do not represent what can be measured in production.

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or
  http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

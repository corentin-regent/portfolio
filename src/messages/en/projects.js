const metadata = {
  'head-description':
    'I have gained valuable technical skills by working on diverse personal projects, throughout my journey in the world of computer science. Here are showcased some of the greatest of these projects.',
  'head-title': 'Personal projects',
};

const pageMessages = {
  'my-projects': 'My own projects',
  'open-source-contributions': 'Contributions to other open-source projects',
  'page-header': 'Personal projects',
  'page-main-text':
    'I enjoy discovering new technologies, concepts and paradigms, and am seeking to always acquire new skills. Here are showcased some of the greatest projects I have realised on my free time.',
};

const rateControl = {
  'rate-control': 'rate-control',
  'text-rate-control':
    'Many external APIs enforce rate limits and respond with errors if queried too frequently. I created the rate-control library as a solution for efficient rate limiting and request scheduling in Python, with support for various algorithms while providing flexibility for adapting to evolving constraints. Many features like request synchronization and prioritization are also available to use.',
};

const poetrel = {
  poetrel: 'Poetrel',
  'text-poetrel-until-github-actions':
    'Poetrel is a collection of Continuous Delivery pipelines for ',
  'text-poetrel-until-pypi':
    '. I originally developed it for automatically releasing Python projects and publishing them to ',
  'text-poetrel-until-github-marketplace':
    ', while also managing the release notes and Changelog file. Additionally, as all things should, Poetrel leverages itself for its own Continuous Delivery to the ',
};

const assemblife = {
  assemblife: "Conway's Game of Life in Assembly",
  'text-assemblife':
    'Aiming to gain a deeper understanding of low-level mechanisms in computers, and to be able to perform micro-optimizations on time-critical applications, I developed the Game of Life using the Assembly language. My program was designed for the x86-64 architecture, on Linux, and uses the terminal as a graphical interface.',
};

const portfolio = {
  portfolio: 'This portfolio website',
  'text-portfolio-until-github-pages':
    'This web application has been the opportunity for me to demonstrate and further enhance my web development skills, while handling the entire workflow, from UI design to the automatic deployment of the website on ',
  'text-portfolio-after-github-pages':
    '. I also gained more experience with performance, accessibility and SEO concerns, which are a top priority for any public web application.',
};

const msgspec = {
  msgspec: 'msgspec',
  'text-msgspec-until-benchmarks':
    "msgspec is the ",
  'text-msgspec-benchmarks':
    "fastest and most memory-efficient",
  'text-msgspec-until-pr':
    " package for JSON serialization in the Python ecosystem. It is a highly optimized project written in C, that interacts directly with Python's C API. In ",
  'this-pr': 'this Pull Request',
  'text-msgspec-after-pr':
    ', I implemented a feature for enforcing validation constraints when parsing arbitrary precision numbers.',
};

export default {
  ...metadata,
  ...pageMessages,
  ...rateControl,
  ...poetrel,
  ...assemblife,
  ...portfolio,
  ...msgspec,
};

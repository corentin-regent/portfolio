const metadata = {
  'page-description':
    'Corentin Régent is a passionate software engineer from France, dedicated to continuously enhancing his broad technical skills.',
  'page-title': 'Home page',
};

const rootPageMessages = {
  contact: 'Contact',
  experience: 'Experience',
  home: 'Home',
  'made-with': 'Made with',
  'my-portfolio': "Corentin Régent's Portfolio",
  projects: 'Projects',
  'view-github-repo': 'View the GitHub repository',
  wip: 'This page is a Work In Progress.',
};

const languageMessages = {
  english: 'English',
  french: 'French',
  'french-flag': 'French flag',
  'united-kingdom-flag': 'United Kingdom flag',
};

const themeMessages = {
  'activate-dark-theme': 'Activate the dark theme',
  'activate-light-theme': 'Activate the light theme',
  'theme-dark': 'Dark theme',
  'theme-light': 'Light theme',
};

const iconDescriptionMessages = {
  'github-svg-desc': 'The GitHub logo, indicates that the resource is available on GitHub.',
  'flag-svg-desc': ({ flag, language }) =>
    `The ${languageMessages[flag]}. Represents the ability to translate the page in ${languageMessages[language]}.`,
  'theme-dark-svg-desc': 'Night icon, the page is rendered using the dark theme.',
  'theme-light-svg-desc': 'Day icon, the page is rendered using the light theme.',
};

export default {
  ...metadata,
  ...rootPageMessages,
  ...languageMessages,
  ...themeMessages,
  ...iconDescriptionMessages,
};

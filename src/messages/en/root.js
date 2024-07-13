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

const otherIconTitles = {
  email: 'Email',
};

const iconDescriptionMessages = {
  'discord-svg-desc': 'The Discord logo, accompanies a reference to a Discord account.',
  'email-svg-desc': 'Envelope icon, accompanies a reference to an email address.',
  'github-svg-desc': 'The GitHub logo, indicates that the resource is available on GitHub.',
  'linkedin-svg-desc': 'The LinkedIn logo, accompanies a reference to a LinkedIn profile.',
  'favicon-desc': 'The favicon of the website, representing an arrow in a circle.',
  'flag-svg-desc': ({ flag, language }) =>
    `The ${languageMessages[flag]}. Represents the ability to translate the page in ${languageMessages[language]}.`,
  'technology-svg-desc': technology =>
    `The ${technology} logo, indicates that the project was developed using ${technology}.`,
  'theme-dark-svg-desc': 'Night icon, the page is rendered using the dark theme.',
  'theme-light-svg-desc': 'Day icon, the page is rendered using the light theme.',
};

const placeHolders = {
  'email-placeholder': 'name@example.com',
};

export default {
  ...metadata,
  ...rootPageMessages,
  ...languageMessages,
  ...themeMessages,
  ...otherIconTitles,
  ...iconDescriptionMessages,
  ...placeHolders,
};

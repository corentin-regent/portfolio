const metadata = {
  'head-description':
    "Hi, I'm Corentin Régent, a passionate software engineer from France. Let's embark on a journey together as you explore my interests, experiences and projects",
  'head-title': 'Home',
};

const rootPageMessages = {
  contact: 'Contact',
  experience: 'Experience',
  home: 'Home',
  'my-portfolio': "Corentin Régent's Portfolio",
  projects: 'Projects',
};

const languageMessages = {
  english: 'English',
  french: 'French',
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
  'kafka-svg-desc': 'The Kafka logo, indicates that the project involved using Kafka.',
  'leaguesgg-svg-desc':
    'The Leagues.gg logo, accompanies mentions of the Leagues.gg company and web application.',
  'linkedin-svg-desc': 'The LinkedIn logo, accompanies a reference to a LinkedIn profile.',
  'theme-dark-svg-desc': 'Night icon, the page is rendered using the dark theme.',
  'theme-light-svg-desc': 'Day icon, the page is rendered using the light theme.',
};

const placeHolders = {
  'email-placeholder': 'name@example.com',
};

const dateMessages = {
  'period-from-to': ({ start, end }) => `${start} – ${end}`,
  'period-from': start => `Since ${start}`,
};

export default {
  ...metadata,
  ...rootPageMessages,
  ...languageMessages,
  ...themeMessages,
  ...otherIconTitles,
  ...iconDescriptionMessages,
  ...placeHolders,
  ...dateMessages,
};

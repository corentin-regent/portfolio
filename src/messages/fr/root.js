import capitalize from '$utils/capitalize';

const metadata = {
  'head-description':
    'Bonjour, je suis Corentin Régent, un ingénieur logiciel passionné. Partons ensemble pour un voyage à la découverte de mes intérêts, expériences et projets.',
  'head-title': 'Accueil',
};

const rootPageMessages = {
  contact: 'Contact',
  experience: 'Expérience',
  home: 'Accueil',
  'my-portfolio': 'Portfolio de Corentin Régent',
  projects: 'Projets',
};

const languageMessages = {
  english: 'Anglais',
  french: 'Français',
};

const themeMessages = {
  'activate-dark-theme': 'Activer le thème sombre',
  'activate-light-theme': 'Activer le thème clair',
  'theme-dark': 'Thème sombre',
  'theme-light': 'Thème clair',
};

const otherIconTitles = {
  email: 'E-mail',
};

const iconDescriptionMessages = {
  'email-svg-desc': "Icône d'enveloppe, accompagne une référence à une adresse e-mail.",
  'github-svg-desc': 'Le logo de GitHub, indique que la ressource est disponible sur GitHub.',
  'kafka-svg-desc': "Le logo de Kafka, indique que le projet impliquait l'utilisation de Kafka.",
  'leaguesgg-svg-desc':
    "Le logo de Leagues.gg, accompagne les mentions à l'entreprise et l'application web Leagues.gg.",
  'theme-dark-svg-desc': 'Icône de nuit, la page est affichée avec le thème sombre.',
  'theme-light-svg-desc': 'Icône de jour, la page est affichée avec le thème clair.',
};

const placeHolders = {
  'email-placeholder': 'nom@exemple.com',
};

const dateMessages = {
  'period-from-to': ({ start, end }) => capitalize(`${start} – ${end}`),
  'period-from': start => `Depuis ${start}`,
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

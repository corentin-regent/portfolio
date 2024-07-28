import capitalize from '$utils/capitalize';

const metadata = {
  'page-description':
    'Corentin Régent est un ingénieur logiciel passionné, en quête perpetuelle de renforcement de ses vastes compétences techniques.',
  'page-title': "Page d'accueil",
};

const rootPageMessages = {
  contact: 'Contact',
  experience: 'Expérience',
  home: 'Accueil',
  'made-with': 'Réalisé avec',
  'my-portfolio': 'Portfolio de Corentin Régent',
  'page-header': 'Welcome',
  'page-main-text':
    'Bonjour, je suis Corentin Régent, un ingénieur logiciel passionné. Partons ensemble pour un voyage à la découverte de mes intérêts, expériences et projets personnels.',
  projects: 'Projets',
  'view-github-repo': 'Voir le dépôt GitHub',
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
  'discord-svg-desc': 'Le logo de Discord, accompagne une référence à un compte Discord.',
  'email-svg-desc': "Icône d'enveloppe, accompagne une référence à une adresse e-mail.",
  'github-svg-desc': 'Le logo de GitHub, indique que la ressource est disponible sur GitHub.',
  'leaguesgg-svg-desc':
    "Le logo de Leagues.gg, accompagne les mentions à l'entreprise et l'application web Leagues.gg.",
  'linkedin-svg-desc': 'Le logo de LinkedIn, accompagne une référence à un profil LinkedIn.',
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

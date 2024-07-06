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
  projects: 'Projets',
  'view-github-repo': 'Voir le dépôt GitHub',
  wip: 'Cette page est en cours de développement.',
};

const languageMessages = {
  english: 'Anglais',
  french: 'Français',
  'french-flag': 'drapeau Français',
  'united-kingdom-flag': 'drapeau du Royaume-Uni',
};

const themeMessages = {
  'activate-dark-theme': 'Activer le thème sombre',
  'activate-light-theme': 'Activer le thème clair',
  'theme-dark': 'Thème sombre',
  'theme-light': 'Thème clair',
};

const iconDescriptionMessages = {
  'github-svg-desc': 'Le logo de GitHub, indique que la ressource est disponible sur GitHub.',
  'favicon-desc': 'Le favicon du site, représentant une flèche dans un cercle.',
  'flag-svg-desc': ({ flag, language }) =>
    `Le ${languageMessages[flag]}. Représente la possibilité de traduire la page en ${languageMessages[language]}.`,
  'theme-dark-svg-desc': 'Icône de nuit, la page est affichée avec le thème sombre.',
  'theme-light-svg-desc': 'Icône de jour, la page est affichée avec le thème clair.',
};

const placeHolders = {
  'email-placeholder': 'nom@exemple.com',
};

export default {
  ...metadata,
  ...rootPageMessages,
  ...languageMessages,
  ...themeMessages,
  ...iconDescriptionMessages,
  ...placeHolders,
};

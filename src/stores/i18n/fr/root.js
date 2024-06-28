const rootPageMessages = {
  contact: 'Contact',
  experience: 'Expérience',
  home: 'Accueil',
  'made-with': 'Réalisé avec',
  'my-portfolio': 'Portfolio de Corentin Régent',
  'page-title': "Page d'accueil",
  projects: 'Projets',
  'view-github-repo': 'Voir le dépôt GitHub',
  wip: 'Cette page est en cours de développement.',
};

const languageMessages = {
  english: 'Anglais',
  french: 'Français',
  'french-flag': 'drapeau Français',
  'united-kingdom-flag': 'drapeau du Royaume-Uni',
}

const themeMessages = {
  'theme-dark': 'Thème sombre',
  'theme-light': 'Thème clair',
  'theme-system': 'Thème du système',
}

const iconDescriptionMessages = {
  'github-svg-desc': 'Le logo de GitHub, indique que la ressource est disponible sur GitHub.',
  'flag-svg-desc': ({ flag, language }) => `Le ${languageMessages[flag]}. Représente la possibilité de traduire la page en ${languageMessages[language]}.`,
  'theme-dark-svg-desc': 'Icône de nuit, la page est affichée avec un thème sombre.',
  'theme-light-svg-desc': 'Icône de jour, la page est affichée avec un thème clair.',
  'theme-system-svg-desc': 'Icône noir et blanc, la page est affichée selon le thème par défaut du système.',
}

export default {
  ...rootPageMessages,
  ...languageMessages,
  ...themeMessages,
  ...iconDescriptionMessages,
}

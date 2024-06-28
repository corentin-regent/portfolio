export const rootMessages = {
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

Object.assign(rootMessages, {
  english: 'Anglais',
  french: 'Français',
  'french-flag': 'drapeau Français',
  'united-kingdom-flag': 'drapeau du Royaume-Uni',
})

Object.assign(rootMessages, {
  'flag-svg-desc': ({ flag, language }) => `Le ${rootMessages[flag]}. Représente la possibilité de traduire la page en ${rootMessages[language]}.`
})

Object.assign(rootMessages, {
  'theme-dark': 'Thème sombre',
  'theme-light': 'Thème clair',
  'theme-system': 'Thème du système',
  'theme-dark-svg-desc': 'Icône de nuit, la page est affichée avec un thème sombre.',
  'theme-light-svg-desc': 'Icône de jour, la page est affichée avec un thème clair.',
  'theme-system-svg-desc': 'Icône noir et blanc, la page est affichée selon le thème par défaut du système.',
})

export const errorPageMessages = {
  'go-back-home': "Retourner à l'accueil",
  'looks-like-youre-lost': "On dirait que tu t'es perdu...",
}

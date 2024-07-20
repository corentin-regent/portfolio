const metadata = {
  'page-description':
    "J'ai acquis de précieuses compétences techniques en travaillant sur divers projets personnels, tout au long de mon parcours dans le monde de l'informatique. Voici quelques-uns des meilleurs de ces projets.",
  'page-title': 'Projets personnels',
};

const pageMessages = {
  'my-projects': 'Mes propres projets',
  'open-source-contributions': "Contribution à d'autres projets open-source",
  'page-header': 'Projets personnels',
  'page-main-text':
    "J'adore découvrir de nouvelles technologies, concepts et paradigmes, et cherche à toujours acquérir de nouvelles compétences. Voici quelques-uns des meilleurs projets sur lesquels j'ai travaillé, dans l'objectif de devenir extrêmement talentueux et polyvalent.",
};

const rateControl = {
  'rate-control': 'rate-control',
  'rate-control-text':
    'De nombreuses API externes appliquent des limites de débit et renvoient des erreurs si elles sont requêtées trop fréquemment. Cette librairie est une solution efficiente pour la limitation et la planification des requêtes en Python. Divers algorithmes sont disponibles, de même que de nombreuses fonctionnalités telles que la synchronisation des requêtes et leur priorisation.',
};

const poetrel = {
  poetrel: 'Poetrel',
  'poetrel-text-until-github-actions':
    'Poetrel est un ensemble de pipelines de livraison continue pour ',
  'poetrel-text-until-pypi':
    ". Je l'ai initialement développé pour la montée de version automatisée de projets Python et leur publication sur ",
  'poetrel-text-until-github-marketplace':
    ", tout en gérant également les notes de version et le fichier Changelog. Par ailleurs, Poetrel s'auto-emploie pour sa propre livraison continue sur ",
};

const assemblife = {
  assemblife: 'Le Jeu de la Vie de Conway en Assembleur',
  'assemblife-text':
    "Cherchant à mieux comprendre les mécanismes de bas niveau dans les ordinateurs, et à être capable d'effectuer des micro-optimisations sur des applications critiques, je développe actuellement le Jeu de la Vie en utilisant le langage Assembleur. Mon programme est conçu pour l'architecture x86-64, sur Linux, et utilise VGA pour afficher la grille dans une interface graphique.",
};

const portfolio = {
  portfolio: 'Ce site portfolio',
  'portfolio-text-until-github-pages':
    "Ce projet a été l'occasion de me charger de l'intégralité d'un processus de développement web, de la conception de l'interface utilisateur au déploiement automatique du site sur ",
  'portfolio-text-after-github-pages':
    ". J'ai également acquis davantage d'expérience avec les enjeux de performance, d'accessibilité et de référencement, qui sont une priorité absolue pour toute application web publique.",
};

const msgspec = {
  msgspec: 'msgspec',
  'msgspec-text-until-pr':
    "msgspec est la librairie la plus performante et économe en mémoire pour la sérialisation JSON dans l'écosystème Python. Le projet est écrit en C, hautement optimisé, et interagit directement avec l'API C de Python. Dans ",
  'this-pr': 'cette Pull Request',
  'msgspec-text-after-pr':
    ", j'ai implémenté une fonctionnalité pour imposer des contraintes de validation lors de la désérialisation de nombres de précision arbitraire.",
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

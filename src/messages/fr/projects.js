const metadata = {
  'head-description':
    "J'ai acquis de précieuses compétences techniques en travaillant sur divers projets personnels, tout au long de mon parcours dans le monde de l'informatique. Voici quelques-uns des meilleurs de ces projets.",
  'head-title': 'Projets personnels',
};

const pageMessages = {
  'my-projects': 'Mes propres projets',
  'open-source-contributions': "Contribution à d'autres projets open-source",
  'page-header': 'Projets personnels',
  'page-main-text':
    "J'adore découvrir de nouvelles technologies, concepts et paradigmes, et cherche à toujours acquérir de nouvelles compétences. Voici quelques-uns des meilleurs projets que j'ai réalisé sur mon temps libre.",
};

const rateControl = {
  'rate-control': 'rate-control',
  'text-rate-control':
    'De nombreuses API externes appliquent des limites de débit et renvoient des erreurs si elles sont requêtées trop fréquemment. Cette librairie est une solution efficiente pour la limitation et la planification des requêtes en Python. Divers algorithmes sont disponibles, de même que de nombreuses fonctionnalités telles que la synchronisation des requêtes et leur priorisation.',
};

const poetrel = {
  poetrel: 'Poetrel',
  'text-poetrel-until-github-actions':
    'Poetrel est un ensemble de pipelines de livraison continue pour ',
  'text-poetrel-until-pypi':
    ". Je l'ai initialement développé pour la montée de version automatisée de projets Python et leur publication sur ",
  'text-poetrel-until-github-marketplace':
    ", tout en gérant également les notes de version et le fichier Changelog. Par ailleurs, Poetrel s'auto-emploie pour sa propre livraison continue sur ",
};

const assemblife = {
  assemblife: 'Le Jeu de la Vie de Conway en Assembleur',
  'text-assemblife':
    "Cherchant à mieux comprendre les mécanismes de bas niveau dans les ordinateurs, et à être capable d'effectuer des micro-optimisations sur des applications critiques, j'ai développé le Jeu de la Vie en utilisant le langage Assembleur. Mon programme est conçu pour l'architecture x86-64, sur Linux, et utilise le terminal comme interface graphique.",
};

const portfolio = {
  portfolio: 'Ce site portfolio',
  'text-portfolio-until-github-pages':
    "Ce projet a été l'occasion de me charger de l'intégralité d'un processus de développement web, de la conception de l'interface utilisateur au déploiement automatique du site sur ",
  'text-portfolio-after-github-pages':
    ". J'ai également acquis davantage d'expérience avec les enjeux de performance, d'accessibilité et de référencement, qui sont une priorité absolue pour toute application web publique.",
};

const msgspec = {
  msgspec: 'msgspec',
  'text-msgspec-until-benchmarks': 'msgspec est la librairie ',
  'text-msgspec-benchmarks': 'la plus performante et économe en mémoire',
  'text-msgspec-until-pr':
    " pour la sérialisation JSON dans l'écosystème Python. Le projet est écrit en C, hautement optimisé, et interagit directement avec l'API C de Python. Dans ",
  'this-pr': 'cette Pull Request',
  'text-msgspec-after-pr':
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

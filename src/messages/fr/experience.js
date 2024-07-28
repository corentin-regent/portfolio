const metadata = {
  'page-description':
    "Découvrez mon parcours, en tant qu'ingénieur dans différentes branches de l'informatique, au sein de plusieurs entreprises et pour des clients de grande envergure.",
  'page-title': 'Expérience',
};

const pageMessages = {
  'page-header': 'Expérience',
  'page-main-text':
    "Vous trouverez ici les différentes étapes de ma carrière en tant qu'ingénieur en informatique.",
  'professional-journey': 'Parcours professionnel',
  education: 'Études',
};

const jobs = {
  'apprentice-computer-science': 'Apprenti Ingénieur en Informatique',
  'data-engineer': 'Ingénieur des Données',
  'full-stack-developer': 'Développeur Full-Stack',
  'software-engineer': 'Ingénieur logiciel',
  'web-developer': 'Développeur Web',
};

const countries = {
  denmark: 'Danemark',
  france: 'France',
};

const cities = {
  copenhagen: 'Copenhague',
  nantes: 'Nantes',
  'saint-herblain': 'Saint-Herblain',
};

const sopraSteriaApprentice = {
  'text-sopra-steria-apprentice':
    "J'ai travaillé à Sopra Steria pendant les trois années de mon apprentissage, pour plusieurs clients de grande envergure. J'ai volontairement changé de projet plusieurs fois, afin d'acquérir davantage de compétences dans différents contextes ; ces expériences sont détaillées ci-dessous.",
};

const geodisData = {
  'text-geodis-data':
    "Je développe actuellement une infrastructure distribuée d'entreposage de données pour Geodis, une entreprise multinationale de logistique qui est divisée en différentes entités sans avoir de système d'information commun. J'ingère et effectue divers traitements sur les données provenant de ces différentes entités, afin de calculer des indicateurs de performance globaux notamment. Je me charge également de la relecture et du test des travaux de mes collègues. Par ailleurs, je m'efforce d'automatiser les tâches répétitives dans nos processus de développement.",
};

const sncfTrace = {
  'text-sncf-trace':
    "J'ai développé une application web interne pour la SNCF, grâce à laquelle les gestionnaires de l'entreprise peuvent accéder à divers rapports financiers. Étant le seul développeur front-end travaillant sur ce projet, j'ai également implémenté des tests d'intégration robustes et des mesures de cybersécurité, supervisé par un responsable technique.",
};

const leaguesggIntern = {
  'text-leagues-intern-until-webapp-link':
    "Dans le cadre de mes études, j'ai réalisé un stage à l'étranger au Danemark, dans la start-up derrière le site ",
  'text-leagues-intern-until-lol-player-page':
    ". J'ai implémenté de nombreuses pages et fonctionnalités aux côtés de l'équipe, comme notamment ",
  'text-leagues-intern-lol-player-page': 'les pages de profil des joueurs de League of Legends',
  'text-leagues-intern-until-successfully-hosted':
    ", et ai conçu toute l'infrastructure back-end pour interagir avec les APIs externes, comprenant l'authentification des joueurs, la limitation du débit des requêtes et la mise en cache des réponses. À la fin de l'été, ",
  'text-leagues-intern-successfully-hosted':
    'Leagues.gg a accueilli avec succès la branche danoise du Championnat Nordique de League of Legends',
  'text-leagues-intern-after-successfully-hosted': ', dans un partenariat avec Riot Games.',
};

const sncfSis = {
  'text-sncf-sis': `Durant ma première année d'alternance, j'ai développé des applications web pour la SNCF, dans le cadre d'un projet intitulé "Systèmes d'Information pour la Supervision" (des trains). Il s'agit des applications que les agents utilisent pour contrôler et planifier en temps réel l'ensemble du trafic ferroviaire en France et dans les régions avoisinantes. C'était ma première expérience professionnelle dans l'informatique, et au départ je ne connaissais rien au développement web. Je me suis donc beaucoup investi pour développer mes compétences, avec un fort soutien de mon équipe, et suis finalement devenu responsable notamment de la rédaction de conceptions techniques de fonctionnalités complexes.`,
};

const polytechIdia = {
  'polytech-idia': "Diplôme d'Ingénieur en Informatique",
  'text-polytech-idia': `Je suis le cursus "Ingénierie des Données et de l'Intelligence Artificielle", au cours duquel j'ai notamment acquis de nombreuses connaissances dans les domaines des bases de données relationnelles, de l'analyse des données et des algorithmes d'apprentissage automatique. Il s'agit d'une formation par apprentissage : je passe la moitié de mon temps à l'école, et durant l'autre moitié je travaille à Sopra Steria.`,
};

const polytechPeip = {
  'polytech-peip': 'Classe Préparatoire Intégrée (PeiP)',
  'text-polytech-peip-before-math-eg':
    "J'ai suivi une classe préparatoire généraliste de deux ans avant le cycle ingénieur, au cours de laquelle j'ai acquis des compétences solides dans divers domaines des mathématiques ",
  'text-polytech-peip-math-eg': 'algèbre, calcul infinitésimal, ...',
  'text-polytech-peip-before-physics-eg': 'et de la physique',
  'text-polytech-peip-physics-eg': 'mécanique, électromagnétisme, ...',
  'text-polytech-peip-after-physics-eg':
    ". J'étais le major de la promotion et me suis classé 3ᵉ sur 1567 étudiants dans le classement national du réseau des écoles Polytech.",
};

export default {
  ...metadata,
  ...pageMessages,
  ...jobs,
  ...countries,
  ...cities,
  ...sopraSteriaApprentice,
  ...geodisData,
  ...sncfTrace,
  ...leaguesggIntern,
  ...sncfSis,
  ...polytechIdia,
  ...polytechPeip,
};

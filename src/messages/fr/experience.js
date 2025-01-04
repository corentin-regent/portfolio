const metadata = {
  'head-description': "Découvrez mon parcours en tant qu'ingénieur en informatique.",
  'head-title': 'Expérience',
};

const pageMessages = {
  'professional-journey': 'Parcours professionnel',
  education: 'Études',
};

const jobs = {
  'apprentice-computer-science': 'Apprenti Ingénieur en Informatique',
  'data-engineer': 'Ingénieur des Données',
  'full-stack-developer': 'Développeur Full-Stack',
  'software-engineer': 'Ingénieur logiciel',
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
    "Je développe une infrastructure distribuée d'entreposage de données pour Geodis. J'ingère et effectue divers traitements sur les données provenant des différentes entités de l'entreprise, afin de calculer des indicateurs de performance globaux notamment. Je m'efforce également d'automatiser les tâches répétitives dans nos processus de développement.",
};

const sncfTrace = {
  'text-sncf-trace':
    "J'ai développé une application web interne pour la SNCF, permettant aux gestionnaires de l'entreprise d'accéder à divers rapports financiers. J'étais le seul développeur front-end travaillant sur ce projet, et j'ai également aidé à implémenter l'authentification et des mesures de cybersécurité dans le back-end.",
};

const leaguesggIntern = {
  'text-leagues-intern-until-webapp-link':
    "J'ai réalisé un stage d'été au Danemark, dans la start-up développant la plateforme ",
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
  'text-sncf-sis': `Durant ma première année d'alternance, je travaillais pour la SNCF, et ai participé au développement des applications que les agents utilisent pour contrôler et planifier en temps réel l'ensemble du trafic ferroviaire en France et dans les régions avoisinantes.`,
};

const polytechIdia = {
  'polytech-idia': "Diplôme d'Ingénieur en Informatique",
  'text-polytech-idia': `Je suis le cursus "Ingénierie des Données et de l'Intelligence Artificielle", au cours duquel j'ai notamment acquis de nombreuses connaissances dans les domaines des bases de données, de l'analyse des données et des algorithmes d'apprentissage automatique. Il s'agit d'une formation par apprentissage : je passe la moitié de mon temps à l'école, et l'autre moitié à Sopra Steria.`,
};

const polytechPeip = {
  'polytech-peip': 'Classe Préparatoire Intégrée (PeiP)',
  'text-polytech-peip':
    "J'ai suivi une classe préparatoire généraliste de deux ans avant le cycle ingénieur, au cours de laquelle j'ai acquis des compétences solides dans divers domaines des mathématiques et de la physique. J'étais le major de la promotion et me suis classé 3ᵉ sur 1567 étudiants dans le classement national du réseau des écoles Polytech.",
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

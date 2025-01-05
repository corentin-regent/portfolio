const metadata = {
  'head-description': 'Learn about my journey as a Computer Science engineer.',
  'head-title': 'Experience',
};

const pageMessages = {
  'professional-journey': 'Professional journey',
  education: 'Education',
};

const jobs = {
  'data-engineer': 'Data engineer',
  'software-engineer': 'Software engineer',
};

const countries = {
  denmark: 'Denmark',
  france: 'France',
};

const cities = {
  copenhagen: 'Copenhagen',
  nantes: 'Nantes',
  'saint-herblain': 'Saint-Herblain',
};

const geodisData = {
  'text-geodis-data':
    'I am developing a distributed data warehousing infrastructure for Geodis. I have been ingesting and processing data coming from various entities of the company, in order to compute global performance indicators notably. I am also endeavoring to automate repetitive tasks in our development processes.',
};

const sncfTrace = {
  'text-sncf-trace':
    "I developed an internal web application for the National Company of the French Railways, where the company's accounting officers could access diverse financial reports. I was the only front-end engineer working on this project, and I also helped implementing authentication and cybersecurity measures in the back-end.",
};

const leaguesggIntern = {
  'text-leagues-intern-until-webapp-link':
    'I did a summer internship in Denmark, at the start-up developing ',
  'text-leagues-intern-until-lol-player-page':
    ' platform. I implemented many pages and features alongside the team, notably ',
  'text-leagues-intern-lol-player-page': 'the League of Legends player profile pages',
  'text-leagues-intern-until-successfully-hosted':
    ', and I engineered the entire back-end infrastructure for interacting with the external APIs, including player authentication, request throttling and response caching. At the end of the summer, ',
  'text-leagues-intern-successfully-hosted':
    'Leagues.gg successfully hosted the Danish branch of the Northern League of Legends Championship',
  'text-leagues-intern-after-successfully-hosted': ', in a partnership with Riot Games.',
};

const sncfSis = {
  'text-sncf-sis':
    'During the first year of my apprenticeship, I worked for the French National Railroad Company, and participated in engineering the applications that the agents use for monitoring and planning in real time the entire railway traffic across France and neighboring regions.',
};

const polytechIdia = {
  'polytech-idia': 'Engineering degree in Computer Science',
  'text-polytech-idia':
    'I am pursuing the "Data Engineering and Artificial Intelligence" curriculum, during which I have notably gained a lot of knowledge in the fields of databases, data analysis, and machine learning algorithms. It is a training by apprenticeship: I spend half of my time at school, and the other half at Sopra Steria.',
};

const polytechPeip = {
  'polytech-peip': 'Preparatory class (PeiP)',
  'text-polytech-peip':
    'I followed a two-year general preparatory class before the engineering cycle, during which I acquired rock-solid knowledge in various fields of mathematics and physics. I was the valedictorian, and ranked 3ʳᵈ out of 1567 students in the national ranking of the Polytech schools network.',
};

export default {
  ...metadata,
  ...pageMessages,
  ...jobs,
  ...countries,
  ...cities,
  ...geodisData,
  ...sncfTrace,
  ...leaguesggIntern,
  ...sncfSis,
  ...polytechIdia,
  ...polytechPeip,
};

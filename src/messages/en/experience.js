const metadata = {
  'head-description':
    'Learn about my journey, as an engineer working in different branches of computer science, in several companies and for large-scale clients.',
  'head-title': 'Experience',
};

const pageMessages = {
  'page-header': 'Experience',
  'page-main-text': 'Here you will find the different stages of my career as a Computer Science engineer.',
  'professional-journey': 'Professional journey',
  'education': 'Education',
};

const jobs = {
  'apprentice-computer-science': 'Apprentice Computer Science Engineer',
  'data-engineer': 'Data Engineer',
  'full-stack-developer': 'Full-Stack Developer',
  'software-engineer': 'Software Engineer',
  'web-developer': 'Web Developer',
};

const countries = {
  denmark: 'Denmark',
  france: 'France',
}

const cities = {
  copenhagen: 'Copenhagen',
  nantes: 'Nantes',
  'saint-herblain': 'Saint-Herblain',
}

const sopraSteriaApprentice = {
  'text-sopra-steria-apprentice': 'I have worked for large-scale clients at Sopra Steria during the three years of my apprenticeship. I voluntarily changed projects several times, in order to gather more knowledge in different contexts; these experiences are detailed below.',
}

const geodisData = {
  'text-geodis-data': 'I am currently developing a distributed data warehousing infrastructure for Geodis, a multinational logistics company that is split into different entities without having a common information system. I have been ingesting and processing data coming from these various entities, in order to compute global performance indicators notably. I have also been reviewing and testing the work of my fellow colleagues. Additionnaly, I am endeavoring to automate repetitive tasks in our development processes.'
};

const sncfTrace = {
  'text-sncf-trace': "I developed an internal web application for the National Company of the French Railways, where the company's accounting officers could access diverse financial reports. Being the only front-end developer working on this project, I also implemented robust integration tests and cybersecurity measures, supervised by a Technical Leader.",
}

const leaguesggIntern = {
  'text-leagues-intern-until-webapp-link': 'As a part of my studies, I did an internship abroad in Denmark, in the start-up behind the ',
  'text-leagues-intern-until-lol-player-page': ' website. I implemented many pages and features alongside the team, notably ',
  'text-leagues-intern-lol-player-page': 'the League of Legends player profile pages',
  'text-leagues-intern-until-successfully-hosted': ', and I engineered the entire back-end infrastructure for interacting with the external APIs, including player authentication, request throttling and response caching. At the end of the summer, ',
  'text-leagues-intern-successfully-hosted': 'Leagues.gg successfully hosted the Danish branch of the Northern League of Legends Championship',
  'text-leagues-intern-after-successfully-hosted': ', in a partnership with Riot Games.',
}

const sncfSis = {
  'text-sncf-sis': 'During the first year of my apprenticeship, I developed web applications for the French National Railroad Company, for a project called "Information Systems for Supervision" (of trains). Those are the applications that the agents use for monitoring and planning in real time the entire railway traffic across France and neighboring regions. It was my first professional experience as a software engineer, and initially I knew nothing about web development. So, I invested a lot into building up my skills, with a strong support from my team, and I ended up being responsible notably for writing technical conceptions of complex functionalities.',
}

const polytechIdia = {
  'polytech-idia': 'Engineering degree in Computer Science',
  'text-polytech-idia': 'I am pursuing the "Data Engineering and Artificial Intelligence" curriculum, during which I have notably gained a lot of knowledge in the fields of relational databases, data analysis, and machine learning algorithms. It is a training by apprenticeship: I spend half of my time at school, and the other half working at Sopra Steria.',
};

const polytechPeip = {
  'polytech-peip': 'Preparatory class (PeiP)',
  'text-polytech-peip-before-math-eg': 'I followed a two-year general preparatory class before the engineering cycle, during which I acquired rock-solid knowledge in various fields of mathematics ',
  'text-polytech-peip-math-eg': 'e.g. algebra, calculus',
  'text-polytech-peip-before-physics-eg': 'and physics',
  'text-polytech-peip-physics-eg': 'e.g. mechanics, electromagnetism',
  'text-polytech-peip-after-physics-eg': '. I was the valedictorian, and ranked 3ʳᵈ out of 1567 students in the national ranking of the Polytech schools network.',
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

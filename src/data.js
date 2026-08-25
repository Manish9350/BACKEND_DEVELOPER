export const profile = {
  name: 'Manish',
  role: 'Backend Developer',
  tagline:
    'I build production backend systems with Node.js, MongoDB, Redis and Docker — currently shipping TripToTravels, with a live platform at onsiteamc.com.',
  location: 'Haryana, India',
  phone: '+91 70151-89739',
  email: 'manish93506@email.com',
  linkedin: 'https://linkedin.com/in/manishverma2003',
  linkedinLabel: 'linkedin.com/in/manishverma2003',
  github: 'https://github.com/Manish9350',
  githubLabel: 'github.com/Manish9350',
};

export const tickerItems = [
  'Node.js',
  'Express.js',
  'MongoDB',
  'Redis Caching',
  'Docker',
  'Microservices',
  'API Gateway',
  'JWT Auth',
  'REST APIs',
];

export const stats = [
  { value: '40%', label: 'Lower system latency via Redis caching' },
  { value: '30%', label: 'Faster API response times' },
  { value: '2', label: 'Production platforms shipped live' },
  { value: '6+', label: 'Production-grade technologies' },
];

export const summary = [
  'Backend developer currently building TripToTravels, with hands-on experience shipping a live product at onsiteamc.com.',
  'Specialize in Node.js, MongoDB, Redis and Docker — focused on writing clean, scalable APIs and production-ready backend systems.',
  'Improved API response times by 30% and reduced system latency by 40% across real-world projects through caching and query optimization.',
  'Final-year BCA student at IITM College, Murthal, shipping production projects alongside academics.',
];

export const skills = [
  { category: 'Languages', items: ['JavaScript', 'SQL'] },
  { category: 'Frontend', items: ['React', 'HTML', 'CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { category: 'Tools', items: ['Docker', 'Redis', 'Nginx', 'Git', 'Postman'] },
  {
    category: 'Concepts',
    items: [
      'Caching',
      'REST APIs',
      'Authentication',
      'Microservices',
      'API Gateway',
      'Database Indexing',
    ],
  },
];

export const experience = [
  {
    company: 'TripToTravels',
    role: 'Backend Developer',
    period: 'May 2026 – Present',
    location: 'triptotravels.com',
    link: 'https://triptotravels.com',
    points: [
      'Building backend services for a live flight, hotel, and tour booking platform with instant confirmation and 24/7 support workflows.',
      'Designed microservices-based architecture with API Gateway for scalable service communication and centralized routing.',
      'Built secure authentication workflows using JWT, access tokens, refresh tokens, and role-based access control.',
      'Optimized MongoDB queries, indexing strategies, and aggregation pipelines to improve database performance.',
      'Implemented Redis caching to reduce database load and improve API response times for frequently accessed data.',
      'Containerized backend services using Docker and configured Nginx for reverse proxying and scalable deployments.',
    ],
  },
  {
    company: 'DeadSecurity India',
    role: 'Web Developer Intern',
    period: 'Feb 2026 – Apr 2026',
    location: 'Remote',
    points: [
      'Engineered scalable backend systems using Node.js and React, improving API response time by 30%.',
      'Designed and implemented microservices architecture with API Gateway for modular and scalable system design.',
      'Reduced system latency by 40% using Redis caching and optimized database queries.',
      'Implemented secure authentication systems using JWT and refresh tokens for session management.',
      'Deployed production-ready applications using Docker and Nginx, enabling horizontal scaling.',
    ],
  },
];

export const projects = [
  {
    name: 'Onsite AMC',
    year: '2026',
    link: 'https://onsiteamc.com',
    linkLabel: 'onsiteamc.com',
    live: true,
    points: [
      'Built and deployed a live electronics protection & AMC platform serving AC, TV, laptop, and mobile repair and subscription plans.',
      'Developed backend services in Node.js and Express.js handling plan subscriptions, device registrations, and service request workflows.',
      'Designed RESTful APIs with JWT-based authentication and role-based access control for customers and service technicians.',
      'Implemented MongoDB data models for AMC plans, device records, and service tracking with 48-hour resolution SLA support.',
      'Containerized and deployed the full application using Docker for production-ready, scalable hosting.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker'],
  },
  {
    name: 'E-commerce Platform',
    year: '2025',
    link: 'https://github.com/Manish9350',
    linkLabel: 'GitHub',
    live: false,
    points: [
      'Architected a microservices-based e-commerce system supporting scalable product, order, and payment workflows.',
      'Designed the system to handle high concurrent traffic using API Gateway and service-to-service communication.',
      'Improved performance by 30% using Redis caching and efficient database indexing.',
      'Implemented secure authentication and role-based access control using JWT.',
      'Containerized services using Docker and configured Nginx for load balancing and scalability.',
    ],
    tags: ['Microservices', 'Redis', 'API Gateway', 'JWT', 'Nginx'],
  },
];

export const education = [
  {
    school: 'IITM College, Murthal',
    degree: 'Bachelor of Computer Applications — Final Year',
    period: '2023 – 2026',
    points: [
      'Relevant Coursework: Data Structures, Algorithms, Databases, Computer Systems.',
      'Built and deployed 2 production projects alongside academics, including a live platform at onsiteamc.com.',
    ],
  },
];

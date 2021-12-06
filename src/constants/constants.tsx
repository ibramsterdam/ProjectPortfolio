const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const projects = [
  {
    title: 'Portfolio',
    description:
      'Using React and Next.js, I have build my portfolio. By default, Next.js pre-renders every page wich results in better performance and SEO',
    image: prefix + '/images/Portfolio.JPG',
    tags: ['NextJs', 'Typescript', 'React'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 0,
  },
  {
    title: 'School-Project',
    description:
      'Using the Angular framework on the frontend and Spring boot on the backend, this project is a fulyl deployed website on the internet',
    image: prefix + '/images/WedstrijdHistorie.JPG',
    tags: ['Angular', 'Typescript', 'Spring Boot'],
    source: 'https://site.ewa.hva.timkwakman.ovh/',
    visit: 'https://google.com',
    id: 1,
  },
];

export const data = [
  { number: 2, text: 'Projects Made ' },
  { number: 1, text: 'Bachelor Completed' },
];

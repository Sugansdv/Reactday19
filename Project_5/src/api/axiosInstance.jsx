const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    companyName: 'InnoTech Solutions',
    description: 'We are seeking a skilled Frontend Developer with experience in React, JavaScript, and modern UI design patterns to build responsive web applications.',
  },
  {
    id: '2',
    title: 'Backend Developer',
    companyName: 'DataCore Systems',
    description: 'Join our backend team to develop scalable REST APIs using Node.js and MongoDB. Experience with cloud services (AWS/GCP) is a plus.',
  },
  {
    id: '3',
    title: 'Fullstack Engineer',
    companyName: 'DigitalForge Inc.',
    description: 'Looking for a Fullstack Engineer proficient in React, Express, and PostgreSQL to work on cross-functional features for enterprise applications.',
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    companyName: 'CreativeMind Studio',
    description: 'Design beautiful and intuitive user experiences using Figma and Adobe XD. Collaborate closely with developers and product managers.',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    companyName: 'CloudNova',
    description: 'Manage CI/CD pipelines, monitor infrastructure, and automate deployments on AWS. Hands-on experience with Docker and Kubernetes required.',
  },
];


export function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobs), 700);
  });
}

export function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((j) => j.id === id.toString());
      if (job) resolve(job);
      else reject(new Error('Job not found'));
    }, 700);
  });
}

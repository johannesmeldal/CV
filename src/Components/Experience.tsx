export interface Experience {
    id: number;
    title: string;
    description: string;
  }
  
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Experience 1',
      description: 'This is the first experience description.',
    },
    {
      id: 2,
      title: 'Experience 2',
      description: 'This is the second experience description.',
    },
    // Add more experiences here
  ];
  
  export default experiences;
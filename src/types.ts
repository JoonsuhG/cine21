export interface Movie {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: string;
  duration: string;
  image: string;
  provider: 'NETFLIX' | 'TVING' | 'DISNEY+' | 'PRIME' | 'WATCHA';
  genre: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  duration: string;
  content: string;
  author: string;
}

export interface Schedule {
  id: string;
  time: string;
  title: string;
  info: string;
}

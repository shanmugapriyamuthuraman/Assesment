export interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  cover: string;
  description: string;
  publisher: string;
  publicationDate: string;
  language: string;
  pages: number;
  genres: string[];
  rating: number;
  reviews: Review[];
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

export interface Author {
  id: string;
  name: string;
  photo: string;
  bio: string;
  genres: string[];
  books: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  rating: number;
}

export interface Genre {
  id: string;
  name: string;
  icon?: string;
}

export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

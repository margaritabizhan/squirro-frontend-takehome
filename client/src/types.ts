export type Store = {
  name: string,
  website: string,
  rating: number,
  storeImage: string,
  establishmentDate: string,
  relationship: {
    countries: string,
    books: string[]
  };
};

export type Authors = {
  [id: string]: string
};

export type Book = {
  name: string,
  copiesSold: number,
  author: string,
};

export type Countries = {
  [id: string]: string
};
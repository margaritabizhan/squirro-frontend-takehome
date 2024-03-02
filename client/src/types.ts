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
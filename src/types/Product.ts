export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrls: string[];
  category: string;
  hauteur: number;
  options?: Product[];
};

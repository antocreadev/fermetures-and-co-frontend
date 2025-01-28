export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrls?: string[];
  images?: {
    id: number;
    url: string;
    productId: number;
  }[];
  category: string;
  hauteur: number;
  options?: Product[];
  mitEnAvant?: boolean;
  ralId?: string | null;
  boisId?: string | null;
  option?: {
    Product: Product;
  };
  bois?: {
    id: number;
    name: string;
    imageUrl: string;
  };
  largeur: number;
  couleur: string;
};

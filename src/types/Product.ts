export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrls?: string[];
  images: {
    id: string;
    url: string;
    productId: string;
  }[];
  category: string;
  hauteur: number;
  options?: Product[];
  mitEnAvant?: boolean;
  ralId: string | null;
  boisId: string | null;
  option?: {
    id: string;
    name: string;
    price: number;
  };
  ral?: {
    id: string;
    name: string;
    imageUrl: string;
  };
  bois?: {
    id: string;
    name: string;
    imageUrl: string;
  };
  largeur: number;
};

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center">
      <img src={image} alt={name} className="h-40 w-full object-cover mb-4" />
      <h3 className="font-semibold text-center">{name}</h3>
      <p className="text-center text-green-600 font-bold mt-2">{price} €</p>
    </div>
  );
};

export default ProductCard;

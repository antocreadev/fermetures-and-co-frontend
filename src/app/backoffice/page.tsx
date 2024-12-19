import AddBois from "@/components/backoffice/addBois";
import AddProduct from "@/components/backoffice/addProduct";
import AddRAL from "@/components/backoffice/addRal";
import TableauProduits from "@/components/backoffice/tableau";

export default function BackofficePage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4">
        <AddProduct />
        <AddRAL />
        <AddBois />
      </div>
      <TableauProduits />
    </div>
  );
}

import AddBois from "@/components/backoffice/addBois";
import AddProduct from "@/components/backoffice/addProduct";
import AddRAL from "@/components/backoffice/addRal";
import TableauProduits from "@/components/backoffice/tableau";
import TableauBois from "@/components/backoffice/tableau-bois";
import TableauRAL from "@/components/backoffice/tableau-ral";

export default function BackofficePage() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Produits</h2>
        <div className="flex gap-4">
          <AddProduct />
        </div>
        <TableauProduits />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">RALs</h2>
        <div className="flex gap-4">
          <AddRAL />
        </div>
        <TableauRAL />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Bois</h2>
        <div className="flex gap-4">
          <AddBois />
        </div>
        <TableauBois />
      </div>
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Product } from "@/types/Product";
import { ArrowUpDown, Search, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import EditProduct from "./editProduct";

type SortConfig = {
  key: keyof Product | "";
  direction: "asc" | "desc";
};

export default function TableauProduits() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "asc",
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();

      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      if (!Array.isArray(data)) {
        throw new Error("Les données reçues ne sont pas au bon format");
      }

      setProducts(data);
      setFilteredProducts(data);
      setError(null);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = products.filter(
      (product) =>
        Object.values(product).some((val) =>
          String(val).toLowerCase().includes(value.toLowerCase())
        ) ||
        product.ral?.name.toLowerCase().includes(value.toLowerCase()) ||
        product.bois?.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (key: keyof Product) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });

    const sorted = [...filteredProducts].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (valA === undefined || valB === undefined) return 0;

      if (typeof valA === "string" && typeof valB === "string") {
        return direction === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredProducts(sorted);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression");
      }

      await fetchProducts();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setError(
        error instanceof Error ? error.message : "Erreur lors de la suppression"
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erreur: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("name")}
                  className="hover:bg-transparent"
                >
                  Nom
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("price")}
                  className="hover:bg-transparent"
                >
                  Prix
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("category")}
                  className="hover:bg-transparent"
                >
                  Catégorie
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("hauteur")}
                  className="hover:bg-transparent"
                >
                  Dimensions
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>RAL</TableHead>
              <TableHead>Bois</TableHead>
              <TableHead>Options</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  Aucun produit trouvé
                </TableCell>
              </TableRow>
            ) : (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.images && product.images[0] && (
                      <Image
                        src={product.images[0].url}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                    )}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}€</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    {product.hauteur}x{product.largeur}cm
                  </TableCell>
                  <TableCell>
                    {product.ral && (
                      <div className="flex items-center gap-2">
                        <Image
                          src={product.ral.imageUrl}
                          alt={product.ral.name}
                          width={30}
                          height={30}
                          className="rounded-md"
                        />
                        <span>{product.ral.name}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {product.bois && (
                      <div className="flex items-center gap-2">
                        <Image
                          src={product.bois.imageUrl}
                          alt={product.bois.name}
                          width={30}
                          height={30}
                          className="rounded-md"
                        />
                        <span>{product.bois.name}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {product.options?.map((opt) => (
                      <div key={opt.option?.id} className="text-sm">
                        {opt.option?.name}
                      </div>
                    )) || null}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <EditProduct product={product} onUpdate={fetchProducts} />
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

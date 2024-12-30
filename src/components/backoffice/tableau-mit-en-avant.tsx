"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type MitEnAvant = {
  id: string;
  ordre: number;
  product: {
    id: string;
    name: string;
    price: number;
    images: {
      id: string;
      url: string;
    }[];
  };
  createdAt: string;
};

export default function TableauMitEnAvant() {
  const [mitEnAvants, setMitEnAvants] = useState<MitEnAvant[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMitEnAvants = async () => {
    try {
      const response = await fetch("/api/mit-en-avant");
      const data = await response.json();
      setMitEnAvants(
        data.sort((a: MitEnAvant, b: MitEnAvant) => a.ordre - b.ordre)
      );
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des mises en avant:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/mit-en-avant/${id}`, {
        method: "DELETE",
      });
      await fetchMitEnAvants();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  useEffect(() => {
    fetchMitEnAvants();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ordre</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Nom du produit</TableHead>
            <TableHead>Prix</TableHead>
            <TableHead>Date d'ajout</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mitEnAvants.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                Aucun produit mis en avant
              </TableCell>
            </TableRow>
          ) : (
            mitEnAvants.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.ordre}</TableCell>
                <TableCell>
                  {item.product.images[0] && (
                    <Image
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      width={50}
                      height={50}
                      className="rounded-md object-cover"
                    />
                  )}
                </TableCell>
                <TableCell>{item.product.name}</TableCell>
                <TableCell>{item.product.price}€</TableCell>
                <TableCell>
                  {new Date(item.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

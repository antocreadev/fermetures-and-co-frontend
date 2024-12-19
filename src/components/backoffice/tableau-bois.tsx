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

type Bois = {
  id: string;
  name: string;
  imageUrl: string;
};

export default function TableauBois() {
  const [bois, setBois] = useState<Bois[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBois = async () => {
    try {
      const response = await fetch("/api/bois");
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Les données reçues ne sont pas au bon format");
      }

      setBois(data);
      setError(null);
    } catch (error) {
      console.error("Erreur lors de la récupération des Bois:", error);
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
      setBois([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/bois/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression");
      }

      await fetchBois();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setError(
        error instanceof Error ? error.message : "Erreur lors de la suppression"
      );
    }
  };

  useEffect(() => {
    fetchBois();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erreur: {error}</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bois.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Aucun Bois trouvé
              </TableCell>
            </TableRow>
          ) : (
            bois.map((b) => (
              <TableRow key={b.id}>
                <TableCell>
                  <Image
                    src={b.imageUrl}
                    alt={b.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell>{b.name}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(b.id)}
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

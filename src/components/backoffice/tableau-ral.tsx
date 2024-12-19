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

type RAL = {
  id: string;
  name: string;
  imageUrl: string;
};

export default function TableauRAL() {
  const [rals, setRals] = useState<RAL[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRals = async () => {
    try {
      const response = await fetch("/api/rals");
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Les données reçues ne sont pas au bon format");
      }

      setRals(data);
      setError(null);
    } catch (error) {
      console.error("Erreur lors de la récupération des RALs:", error);
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
      setRals([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/rals/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression");
      }

      await fetchRals();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      setError(
        error instanceof Error ? error.message : "Erreur lors de la suppression"
      );
    }
  };

  useEffect(() => {
    fetchRals();
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
          {rals.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Aucun RAL trouvé
              </TableCell>
            </TableRow>
          ) : (
            rals.map((ral) => (
              <TableRow key={ral.id}>
                <TableCell>
                  <Image
                    src={ral.imageUrl}
                    alt={ral.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell>{ral.name}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(ral.id)}
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

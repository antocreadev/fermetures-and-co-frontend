"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddRAL() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Si une image est sélectionnée, l'ajouter au FormData
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("/api/rals", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du RAL");
      }

      // Réinitialiser le formulaire
      e.currentTarget.reset();
      setImage(null);
      setLoading(false);
    } catch (error) {
      console.error("Erreur:", error);
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ajouter un RAL</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un RAL</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Nom du RAL</Label>
            <Input required id="name" name="name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="image">Image</Label>
            <Input
              required
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Chargement..." : "Ajouter"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

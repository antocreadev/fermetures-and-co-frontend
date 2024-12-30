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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type RAL = {
  id: string;
  name: string;
  imageUrl: string;
};

type Bois = {
  id: string;
  name: string;
  imageUrl: string;
};

export default function AddProduct() {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [rals, setRals] = useState<RAL[]>([]);
  const [bois, setBois] = useState<Bois[]>([]);

  // Ajout des catégories disponibles
  const categories = [
    "portail-coulissant",
    "portail-battant",
    "portillon",
    "accessoire-portail",
    "motorisation-portail",
    "pergola",
  ];

  useEffect(() => {
    // Charger les RALs et Bois au montage du composant
    const fetchData = async () => {
      try {
        const [ralsResponse, boisResponse] = await Promise.all([
          fetch("/api/rals"),
          fetch("/api/bois"),
        ]);
        const ralsData = await ralsResponse.json();
        const boisData = await boisResponse.json();
        setRals(ralsData);
        setBois(boisData);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Créer le produit
      const productResponse = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          price: parseFloat(formData.get("price") as string),
          category: formData.get("category"),
          hauteur: parseInt(formData.get("hauteur") as string),
          largeur: parseInt(formData.get("largeur") as string),
          ralId: formData.get("ralId") || undefined,
          boisId: formData.get("boisId") || undefined,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const product = await productResponse.json();

      // Upload des images
      if (images.length > 0) {
        const uploadFormData = new FormData();
        images.forEach((image) => {
          uploadFormData.append("files", image);
        });
        uploadFormData.append("productId", product.id);

        await fetch("/api/products/upload", {
          method: "POST",
          body: uploadFormData,
        });
      }

      router.refresh();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Ajouter un produit</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Ajouter un produit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Nom</Label>
            <Input required id="name" name="name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="price">Prix</Label>
            <Input required type="number" step="0.01" id="price" name="price" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="category">Catégorie</Label>
            <Select name="category" required>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="hauteur">Hauteur</Label>
            <Input required type="number" id="hauteur" name="hauteur" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="largeur">Largeur</Label>
            <Input required type="number" id="largeur" name="largeur" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="ralId">RAL</Label>
            <Select name="ralId">
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un RAL" />
              </SelectTrigger>
              <SelectContent>
                {rals.map((ral) => (
                  <SelectItem key={ral.id} value={ral.id}>
                    {ral.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="boisId">Bois</Label>
            <Select name="boisId">
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un Bois" />
              </SelectTrigger>
              <SelectContent>
                {bois.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="images">Images</Label>
            <Input
              required
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setImages(Array.from(e.target.files));
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

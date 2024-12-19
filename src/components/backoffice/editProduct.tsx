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
import { Pencil, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  hauteur: number;
  largeur: number;
  couleur: string;
  images: {
    id: string;
    url: string;
  }[];
};

type EditProductProps = {
  product: Product;
  onUpdate: () => void;
};

export default function EditProduct({ product, onUpdate }: EditProductProps) {
  const [loading, setLoading] = useState(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [currentImages, setCurrentImages] = useState(product.images);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Mettre à jour le produit
      await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: formData.get("name"),
          price: parseFloat(formData.get("price") as string),
          category: formData.get("category"),
          hauteur: parseInt(formData.get("hauteur") as string),
          largeur: parseInt(formData.get("largeur") as string),
          couleur: formData.get("couleur"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Upload des nouvelles images si présentes
      if (newImages.length > 0) {
        const uploadFormData = new FormData();
        newImages.forEach((image) => {
          uploadFormData.append("files", image);
        });
        uploadFormData.append("productId", product.id);

        await fetch("/api/products/upload", {
          method: "POST",
          body: uploadFormData,
        });
      }

      onUpdate();
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      await fetch(`/api/products/images/${imageId}`, {
        method: "DELETE",
      });
      setCurrentImages((prev) => prev.filter((img) => img.id !== imageId));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'image:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier le produit</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Nom</Label>
            <Input required id="name" name="name" defaultValue={product.name} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="price">Prix</Label>
            <Input
              required
              type="number"
              step="0.01"
              id="price"
              name="price"
              defaultValue={product.price}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="category">Catégorie</Label>
            <Input
              required
              id="category"
              name="category"
              defaultValue={product.category}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="hauteur">Hauteur</Label>
            <Input
              required
              type="number"
              id="hauteur"
              name="hauteur"
              defaultValue={product.hauteur}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="largeur">Largeur</Label>
            <Input
              required
              type="number"
              id="largeur"
              name="largeur"
              defaultValue={product.largeur}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="couleur">Couleur</Label>
            <Input
              required
              id="couleur"
              name="couleur"
              defaultValue={product.couleur}
            />
          </div>

          <div className="space-y-2">
            <Label>Images existantes</Label>
            <div className="grid grid-cols-3 gap-2">
              {currentImages.map((image) => (
                <div key={image.id} className="relative group">
                  <Image
                    src={image.url}
                    alt="Product image"
                    width={100}
                    height={100}
                    className="rounded-md object-cover w-full h-[100px]"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(image.id)}
                    className="absolute top-1 right-1 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="images">Ajouter des images</Label>
            <Input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setNewImages(Array.from(e.target.files));
                }
              }}
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Chargement..." : "Modifier"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

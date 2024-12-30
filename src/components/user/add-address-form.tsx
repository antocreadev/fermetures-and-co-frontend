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
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddAddressForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const addressData = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      adresse: formData.get("adresse"),
      complementAdresse: formData.get("complementAdresse"),
      codePostal: formData.get("codePostal"),
      ville: formData.get("ville"),
      pays: formData.get("pays"),
    };

    try {
      const response = await fetch("/api/user/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addressData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de l'adresse");
      }

      setOpen(false);
      router.refresh();
    } catch (error) {
      setError("Impossible d'ajouter l'adresse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Ajouter une adresse
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter une adresse</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" name="nom" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input id="prenom" name="prenom" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="adresse">Adresse</Label>
              <Input id="adresse" name="adresse" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="complementAdresse">Complément d'adresse</Label>
              <Input id="complementAdresse" name="complementAdresse" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="codePostal">Code postal</Label>
                <Input id="codePostal" name="codePostal" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="ville">Ville</Label>
                <Input id="ville" name="ville" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pays">Pays</Label>
              <Input id="pays" name="pays" defaultValue="France" required />
            </div>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Ajout..." : "Ajouter"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

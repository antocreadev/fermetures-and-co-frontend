"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AddAddressForm from "./add-address-form";
import EditUserForm from "./edit-user-form";

interface UserData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sexe: string;
  addresses: Array<{
    id: string;
    adresse: string;
    ville: string;
    codePostal: string;
    nom: string;
    prenom: string;
    complementAdresse?: string;
    pays: string;
  }>;
}

export default function UserInfo() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError("Impossible de charger les informations utilisateur");
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const response = await fetch(`/api/user/address?id=${addressId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de l'adresse");
      }

      setUserData((prev) =>
        prev
          ? {
              ...prev,
              addresses: prev.addresses.filter((addr) => addr.id !== addressId),
            }
          : null
      );
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  if (loading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Mes informations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[300px]" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!userData) {
    return <div>Aucune information disponible</div>;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <CardTitle>Mes informations</CardTitle>
        </div>
        <div className="flex items-center gap-4">
          <EditUserForm userData={userData} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Informations personnelles</h3>
            <p>Nom: {userData.nom}</p>
            <p>Prénom: {userData.prenom}</p>
            <p>Email: {userData.email}</p>
            <p>Téléphone: {userData.telephone}</p>
            <p>Sexe: {userData.sexe}</p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Adresses</h3>
              <AddAddressForm />
            </div>
            {userData.addresses.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Aucune adresse enregistrée
              </p>
            ) : (
              userData.addresses.map((address, index) => (
                <div
                  key={index}
                  className="mb-4 p-3 border rounded-lg relative"
                >
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      Supprimer
                    </Button>
                  </div>
                  <p className="font-medium">
                    {address.nom} {address.prenom}
                  </p>
                  <p>{address.adresse}</p>
                  {address.complementAdresse && (
                    <p>{address.complementAdresse}</p>
                  )}
                  <p>
                    {address.codePostal} {address.ville}
                  </p>
                  <p>{address.pays}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/user/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la déconnexion");
      }

      router.push("/auth/login");
      router.refresh();
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      disabled={loading}
      size="sm"
    >
      {loading ? "Déconnexion..." : "Se déconnecter"}
    </Button>
  );
}

import { getUser } from "@/lib/auth";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const userData = await getUser();

    if (!userData || !userData.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();
    const { nom, prenom, adresse, complementAdresse, codePostal, ville, pays } =
      body;

    const newAddress = await prisma.address.create({
      data: {
        nom,
        prenom,
        adresse,
        complementAdresse,
        codePostal,
        ville,
        pays,
        userId: userData.id as string,
      },
    });

    return NextResponse.json(newAddress);
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const userData = await getUser();

    if (!userData || !userData.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const addressId = searchParams.get("id");

    if (!addressId) {
      return NextResponse.json(
        { error: "ID d'adresse manquant" },
        { status: 400 }
      );
    }

    // Vérifier que l'adresse appartient bien à l'utilisateur
    const address = await prisma.address.findFirst({
      where: {
        id: addressId,
        userId: userData.id,
      },
    });

    if (!address) {
      return NextResponse.json(
        { error: "Adresse non trouvée" },
        { status: 404 }
      );
    }

    await prisma.address.delete({
      where: {
        id: addressId,
      },
    });

    return NextResponse.json({ message: "Adresse supprimée avec succès" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

import { getUser } from "@/lib/auth";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userData = await getUser();

    if (!userData || !userData.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userData.id as string },
      select: {
        id: true,
        email: true,
        nom: true,
        prenom: true,
        telephone: true,
        sexe: true,
        recevoirMails: true,
        createdAt: true,
        addresses: true,
        orders: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const userData = await getUser();

    if (!userData || !userData.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();
    const { nom, prenom, email, telephone, sexe } = body;

    const updatedUser = await prisma.user.update({
      where: { id: userData.id as string },
      data: {
        nom,
        prenom,
        email,
        telephone,
        sexe,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

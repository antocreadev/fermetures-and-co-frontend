import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const mitEnAvants = await prisma.mitEnAvant.findMany({
      include: {
        product: {
          include: {
            images: true,
          },
        },
      },
    });
    return NextResponse.json(mitEnAvants);
  } catch (error) {
    console.error("Erreur GET mit-en-avant:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des mises en avant" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Vérification des données reçues
    if (!body.productId) {
      return NextResponse.json(
        { error: "L'ID du produit est requis" },
        { status: 400 }
      );
    }

    // Vérifier si le produit existe déjà en mise en avant
    const existingMitEnAvant = await prisma.mitEnAvant.findFirst({
      where: {
        productId: body.productId,
      },
    });

    if (existingMitEnAvant) {
      return NextResponse.json(
        { error: "Ce produit est déjà mis en avant" },
        { status: 400 }
      );
    }

    const mitEnAvant = await prisma.mitEnAvant.create({
      data: {
        productId: body.productId,
        ordre: body.ordre || 0,
      },
      include: {
        product: {
          include: {
            images: true,
          },
        },
      },
    });

    return NextResponse.json(mitEnAvant);
  } catch (error) {
    console.error("Erreur POST mit-en-avant:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la mise en avant" },
      { status: 500 }
    );
  }
}

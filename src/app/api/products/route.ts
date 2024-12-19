import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true,
        ral: true,
        bois: true,
      },
    });

    if (!Array.isArray(products)) {
      throw new Error("Erreur inattendue: les produits ne sont pas un tableau");
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des produits" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
        category: body.category,
        hauteur: body.hauteur,
        largeur: body.largeur,
        idImage: "default",
        ralId: body.ralId,
        boisId: body.boisId,
      },
      include: {
        images: true,
        ral: true,
        bois: true,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la création du produit" },
      { status: 500 }
    );
  }
}

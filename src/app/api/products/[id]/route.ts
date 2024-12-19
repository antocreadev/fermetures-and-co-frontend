import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du produit" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const product = await prisma.product.update({
      where: {
        id: params.id,
      },
      data: {
        name: body.name,
        price: body.price,
        category: body.category,
        hauteur: body.hauteur,
        largeur: body.largeur,
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
      { error: "Erreur lors de la modification du produit" },
      { status: 500 }
    );
  }
}

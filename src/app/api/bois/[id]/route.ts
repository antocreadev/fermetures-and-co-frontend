import prisma from "@/lib/db";
import { unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bois = await prisma.bois.delete({
      where: {
        id: params.id,
      },
    });

    // Supprimer le fichier image
    const filePath = path.join(process.cwd(), "public", bois.imageUrl);
    try {
      await unlink(filePath);
    } catch (error) {
      console.error("Erreur lors de la suppression du fichier:", error);
    }

    return NextResponse.json({ message: "Bois supprimé avec succès" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du Bois" },
      { status: 500 }
    );
  }
}

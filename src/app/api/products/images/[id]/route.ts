import prisma from "@/lib/db";
import { unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Récupérer l'image
    const image = await prisma.image.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!image) {
      return NextResponse.json({ error: "Image non trouvée" }, { status: 404 });
    }

    // Supprimer le fichier physique
    const filePath = path.join(process.cwd(), "public", image.url);
    try {
      await unlink(filePath);
    } catch (error) {
      console.error("Erreur lors de la suppression du fichier:", error);
    }

    // Supprimer l'entrée dans la base de données
    await prisma.image.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "Image supprimée avec succès" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression de l'image" },
      { status: 500 }
    );
  }
}

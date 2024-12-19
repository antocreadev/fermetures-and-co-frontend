import prisma from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const productId = formData.get("productId") as string;

    const uploadedImages = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Créer un nom de fichier unique
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);

      // Sauvegarder le fichier
      await writeFile(filePath, buffer);

      // Créer l'entrée dans la base de données
      const image = await prisma.image.create({
        data: {
          url: `/uploads/${fileName}`,
          productId: productId,
        },
      });

      uploadedImages.push(image);
    }

    return NextResponse.json(uploadedImages);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de l'upload des images" },
      { status: 500 }
    );
  }
}

import prisma from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const bois = await prisma.bois.findMany();
    return NextResponse.json(bois);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des Bois" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;

    // Créer un nom de fichier unique
    const fileName = `${Date.now()}-${image.name}`;
    const filePath = path.join(process.cwd(), "public/uploads/bois", fileName);

    // Sauvegarder l'image
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Créer le Bois dans la base de données
    const bois = await prisma.bois.create({
      data: {
        name,
        imageUrl: `/uploads/bois/${fileName}`,
      },
    });

    return NextResponse.json(bois);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la création du Bois" },
      { status: 500 }
    );
  }
}

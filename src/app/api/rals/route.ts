import prisma from "@/lib/db";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const rals = await prisma.rAL.findMany();
    return NextResponse.json(rals);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des RALs" },
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
    const filePath = path.join(process.cwd(), "public/uploads/rals", fileName);

    // Sauvegarder l'image
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Créer le RAL dans la base de données
    const ral = await prisma.rAL.create({
      data: {
        name,
        imageUrl: `/uploads/rals/${fileName}`,
      },
    });

    return NextResponse.json(ral);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la création du RAL" },
      { status: 500 }
    );
  }
}

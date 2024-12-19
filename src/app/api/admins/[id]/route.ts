import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.admin.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      message: "Administrateur supprimé avec succès",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression de l'administrateur" },
      { status: 500 }
    );
  }
}

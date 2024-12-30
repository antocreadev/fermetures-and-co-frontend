import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.mitEnAvant.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({
      message: "Mise en avant supprimée avec succès",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la suppression de la mise en avant" },
      { status: 500 }
    );
  }
}

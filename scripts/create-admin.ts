import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function createAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error("Usage: npm run create-admin <email> <password>");
    process.exit(1);
  }

  try {
    const hashedPassword = await hash(password, 10);
    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log("Admin créé avec succès:", admin.email);
  } catch (error) {
    console.error("Erreur lors de la création de l'admin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();

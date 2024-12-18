-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "idImage" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "hauteur" INTEGER NOT NULL,
    "largeur" INTEGER NOT NULL,
    "couleur" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "productId" TEXT NOT NULL
);

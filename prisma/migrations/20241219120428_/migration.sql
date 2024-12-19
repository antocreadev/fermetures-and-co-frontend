/*
  Warnings:

  - You are about to drop the column `couleur` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0.0,
    "idImage" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "hauteur" INTEGER NOT NULL,
    "largeur" INTEGER NOT NULL,
    "ralId" TEXT,
    "boisId" TEXT,
    CONSTRAINT "Product_ralId_fkey" FOREIGN KEY ("ralId") REFERENCES "RAL" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_boisId_fkey" FOREIGN KEY ("boisId") REFERENCES "Bois" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("boisId", "category", "hauteur", "id", "idImage", "largeur", "name", "price", "ralId") SELECT "boisId", "category", "hauteur", "id", "idImage", "largeur", "name", "price", "ralId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

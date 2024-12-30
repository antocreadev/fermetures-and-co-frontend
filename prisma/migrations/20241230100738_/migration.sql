-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MitEnAvant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "ordre" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MitEnAvant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MitEnAvant" ("createdAt", "id", "productId", "updatedAt") SELECT "createdAt", "id", "productId", "updatedAt" FROM "MitEnAvant";
DROP TABLE "MitEnAvant";
ALTER TABLE "new_MitEnAvant" RENAME TO "MitEnAvant";
CREATE UNIQUE INDEX "MitEnAvant_productId_key" ON "MitEnAvant"("productId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

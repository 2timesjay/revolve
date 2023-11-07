/*
  Warnings:

  - Added the required column `budgetId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "budgetId" INTEGER NOT NULL,
    CONSTRAINT "Item_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("amount", "id", "name") SELECT "amount", "id", "name" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

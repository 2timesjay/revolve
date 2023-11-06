/*
  Warnings:

  - You are about to drop the column `budgetId` on the `Item` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Item" ("amount", "id", "name") SELECT "amount", "id", "name" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

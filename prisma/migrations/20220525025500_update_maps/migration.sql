/*
  Warnings:

  - You are about to drop the `NonPlayableCharacter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inventoriesItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CharacterToCharacterItem" DROP CONSTRAINT "_CharacterToCharacterItem_B_fkey";

-- DropForeignKey
ALTER TABLE "inventoriesItems" DROP CONSTRAINT "inventoriesItems_itemId_fkey";

-- DropTable
DROP TABLE "NonPlayableCharacter";

-- DropTable
DROP TABLE "inventoriesItems";

-- CreateTable
CREATE TABLE "charactersItems" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "charactersItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nonPlayableCharacters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "portraitUrl" TEXT NOT NULL,

    CONSTRAINT "nonPlayableCharacters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "charactersItems" ADD CONSTRAINT "charactersItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCharacterItem" ADD CONSTRAINT "_CharacterToCharacterItem_B_fkey" FOREIGN KEY ("B") REFERENCES "charactersItems"("id") ON DELETE CASCADE ON UPDATE CASCADE;

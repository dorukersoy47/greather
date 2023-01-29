/*
  Warnings:

  - You are about to drop the `Date` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `dateId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `peopleId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `datesGoal` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datesStart` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peopleJoined` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peopleTarget` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sponsorId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Date";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "People";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "where" TEXT NOT NULL,
    "reward" INTEGER NOT NULL,
    "eventPhoto" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "peopleJoined" INTEGER NOT NULL,
    "peopleTarget" INTEGER NOT NULL,
    "datesStart" INTEGER NOT NULL,
    "datesGoal" INTEGER NOT NULL,
    "sponsorId" INTEGER NOT NULL,
    "requirements" TEXT NOT NULL,
    CONSTRAINT "Event_sponsorId_fkey" FOREIGN KEY ("sponsorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("description", "eventPhoto", "id", "requirements", "reward", "title", "where") SELECT "description", "eventPhoto", "id", "requirements", "reward", "title", "where" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Date" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "start" DATETIME NOT NULL,
    "goal" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "People" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "joined" INTEGER NOT NULL,
    "target" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "where" TEXT NOT NULL,
    "reward" INTEGER NOT NULL,
    "eventPhoto" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "peopleId" INTEGER NOT NULL,
    "requirements" TEXT NOT NULL,
    CONSTRAINT "Event_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "Date" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Event_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "People" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

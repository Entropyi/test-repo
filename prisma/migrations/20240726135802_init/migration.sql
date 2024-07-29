-- CreateTable
CREATE TABLE "Form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "photoTitle" TEXT DEFAULT 'nill',
    "comment" TEXT DEFAULT 'nill',
    "photoLocation" TEXT NOT NULL,
    "photoPurpose" TEXT DEFAULT 'nill'
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_email_key" ON "Form"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Form_phoneNumber_key" ON "Form"("phoneNumber");

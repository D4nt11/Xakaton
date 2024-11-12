-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "patronymic" TEXT,
    "email" TEXT NOT NULL,
    "snils" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Indicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserIndicators" (
    "idUI" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "indicatorId" INTEGER NOT NULL,

    CONSTRAINT "UserIndicators_pkey" PRIMARY KEY ("idUI")
);

-- CreateTable
CREATE TABLE "HeartIndicator" (
    "id" SERIAL NOT NULL,
    "idUI" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "HeartIndicator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_snils_key" ON "Doctor"("snils");

-- CreateIndex
CREATE UNIQUE INDEX "UserIndicators_userId_key" ON "UserIndicators"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserIndicators_indicatorId_key" ON "UserIndicators"("indicatorId");

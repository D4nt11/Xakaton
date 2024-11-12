-- AlterTable
CREATE SEQUENCE userindicators_idui_seq;
ALTER TABLE "UserIndicators" ALTER COLUMN "idUI" SET DEFAULT nextval('userindicators_idui_seq');
ALTER SEQUENCE userindicators_idui_seq OWNED BY "UserIndicators"."idUI";

-- CreateTable
CREATE TABLE "LiverIndicator" (
    "id" SERIAL NOT NULL,
    "idUI" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "LiverIndicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IndicatorToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IndicatorToUser_AB_unique" ON "_IndicatorToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_IndicatorToUser_B_index" ON "_IndicatorToUser"("B");

-- AddForeignKey
ALTER TABLE "_IndicatorToUser" ADD CONSTRAINT "_IndicatorToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Indicator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicatorToUser" ADD CONSTRAINT "_IndicatorToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

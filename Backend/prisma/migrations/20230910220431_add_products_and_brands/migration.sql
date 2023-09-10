-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "products";

-- CreateTable
CREATE TABLE "products"."Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "products"."Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_logo_url_key" ON "products"."Brand"("logo_url");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "products"."Product"("name");

-- AddForeignKey
ALTER TABLE "products"."Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "products"."Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "item_id" UUID NOT NULL,
    "item_name" VARCHAR(255),
    "category" VARCHAR(50),
    "source" VARCHAR(50),
    "serial_number" VARCHAR(255),
    "certificate" VARCHAR(255),
    "quantity_available" INTEGER,
    "unit_price" DOUBLE PRECISION,
    "total_value" DOUBLE PRECISION,
    "supplier_name" VARCHAR(100),
    "supplier_contact" VARCHAR(100),
    "current_location" VARCHAR(100),
    "date_maintenance" TIMESTAMP(3),
    "date_of_acquisition" TIMESTAMP(3),
    "expiration_date" TIMESTAMP(3),
    "condition" VARCHAR(20),
    "check_inventory_update" VARCHAR(50),
    "group_division" VARCHAR(50),
    "notes" TEXT,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "images" (
    "image_id" UUID NOT NULL,
    "item_id" UUID,
    "file_type" VARCHAR(20),
    "file_name" VARCHAR(100),
    "content" BYTEA,

    CONSTRAINT "images_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "inventory_files" (
    "file_id" UUID NOT NULL,
    "item_id" UUID,
    "file_type" VARCHAR(20),
    "file_name" VARCHAR(100),
    "content" BYTEA,

    CONSTRAINT "inventory_files_pkey" PRIMARY KEY ("file_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "images_item_id_idx" ON "images"("item_id");

-- CreateIndex
CREATE INDEX "inventory_files_item_id_idx" ON "inventory_files"("item_id");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_ibfk_1" FOREIGN KEY ("item_id") REFERENCES "inventory"("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory_files" ADD CONSTRAINT "inventory_files_ibfk_1" FOREIGN KEY ("item_id") REFERENCES "inventory"("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

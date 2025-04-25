-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_ibfk_1";

-- DropForeignKey
ALTER TABLE "inventory_files" DROP CONSTRAINT "inventory_files_ibfk_1";

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_ibfk_1" FOREIGN KEY ("item_id") REFERENCES "inventory"("item_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory_files" ADD CONSTRAINT "inventory_files_ibfk_1" FOREIGN KEY ("item_id") REFERENCES "inventory"("item_id") ON DELETE CASCADE ON UPDATE NO ACTION;

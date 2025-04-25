import { Request, Response } from "express";
import { Router } from "express";
import { prisma } from "../generated/prisma/database";
import { v4 as uuid } from "uuid";
import { upload } from "../Middleware/upload";
import fs from "fs";

const DashboardRouter = Router();

// Barang Dashboard

// add barang
DashboardRouter.post("/add",upload.fields([
    { name: "images", maxCount: 5 },
    { name: "inventory_files", maxCount: 5 },
  ]), async (req: Request, res: Response) => {
    try{
        const formData = req.body;
        const files = req.files as {
            images?: Express.Multer.File[];
            inventory_files?: Express.Multer.File[];
          };

        const itemId = uuid();
        const itemData = {
            item_id: itemId,
            item_name: formData.item_name,
            category: formData.category,
            source: formData.source,
            serial_number: formData.serial_number,
            certificate: formData.certificate,
            quantity_available: Number.parseInt(formData.quantity_available),
            unit_price: Number.parseFloat(formData.unit_price),
            total_value: Number.parseFloat(formData.total_value),
            supplier_name: formData.supplier_name,
            supplier_contact: formData.supplier_contact,
            current_location: formData.current_location,
            date_maintenance: formData.date_maintenance ? new Date(formData.date_maintenance) : null,
            date_of_acquisition: formData.date_of_acquisition
                ? new Date(formData.date_of_acquisition)
                : null,
            expiration_date: formData.expiration_date ? new Date(formData.expiration_date) : null,
            condition: formData.condition,
            check_inventory_update: formData.check_inventory_update,
            group_division: formData.group_division,
            notes: formData.notes
    }
    const item = await prisma.inventory.create({
        data: itemData,
        include: {
            images: true,
            inventory_files: true,
        },
    });

    // images
    if (files.images) {
        for (const file of files.images) {
          await prisma.images.create({
            data: {
              image_id: uuid(),
              item_id: itemId,
              file_type: file.mimetype,
              file_name: file.filename,
            },
          });
        }
      }
  
      // inventory_files
      if (files.inventory_files) {
        for (const file of files.inventory_files) {
          await prisma.inventory_files.create({
            data: {
              file_id: uuid(),
              item_id: itemId,
              file_type: file.mimetype,
              file_name: file.filename,
            },
          });
        }
      }
        res.status(200).json({
            status: "success",
            message: "Item created successfully",
            data: item,
        });
        console.log("Item created successfully:", item);
        console.log("Files uploaded successfully:", files);
    } catch (error : any) {
        console.error("Error creating item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to create item",
            error: error.message,
        });
    }
});

// get all barang
DashboardRouter.get("/read", async (req: Request, res: Response) => {
    try {
        const items = await prisma.inventory.findMany({
            include: {
                images: true,
                inventory_files: true,
            },
        });
        res.status(200).json({
            status: "success",
            message: "Items retrieved successfully",
            data: items,
        });
    } catch (error : any) {
        console.error("Error retrieving items:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to retrieve items",
            error: error.message,
        });
    }
}
);

// get barang by id
DashboardRouter.get("/read/:id", async (req: Request, res: Response) => {
    try {
        const itemId = req.params.id;
        const item = await prisma.inventory.findUnique({
            where: {
                item_id: itemId,
            },
            include: {
                images: true,
                inventory_files: true,
            },
        });
        if (!item) {
            res.status(404).json({
                status: "error",
                message: "Item not found",
            });
            return;
        }
        res.status(200).json({
            status: "success",
            message: "Item retrieved successfully",
            data: item,
        });
    } catch (error : any) {
        console.error("Error retrieving item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to retrieve item",
            error: error.message,
        });
    }
}
);

// update barang by id
DashboardRouter.put("/update/:id", upload.fields([
    { name: "images", maxCount: 5 },
    { name: "inventory_files", maxCount: 5 },
  ]), async (req: Request, res: Response) => {
    try {
        const itemId = req.params.id;
        const formData = req.body;
        const files = req.files as {
            images?: Express.Multer.File[];
            inventory_files?: Express.Multer.File[];
          };

        const itemData = {
            item_name: formData.item_name,
            category: formData.category,
            source: formData.source,
            serial_number: formData.serial_number,
            certificate: formData.certificate,
            quantity_available: Number.parseInt(formData.quantity_available),
            unit_price: Number.parseFloat(formData.unit_price),
            total_value: Number.parseFloat(formData.total_value),
            supplier_name: formData.supplier_name,
            supplier_contact: formData.supplier_contact,
            current_location: formData.current_location,
            date_maintenance: formData.date_maintenance ? new Date(formData.date_maintenance) : null,
            date_of_acquisition: formData.date_of_acquisition
                ? new Date(formData.date_of_acquisition)
                : null,
            expiration_date: formData.expiration_date ? new Date(formData.expiration_date) : null,
            condition: formData.condition,
            check_inventory_update: formData.check_inventory_update,
            group_division: formData.group_division,
            notes: formData.notes
        };

        const item = await prisma.inventory.update({
            where: {
                item_id: itemId,
            },
            data: itemData,
        });

        // images
        if (files.images) {
          for (const file of files.images) {
            await prisma.images.create({
              data: {
                image_id: uuid(),
                item_id: itemId,
                file_type: file.mimetype,
                file_name: file.filename,
              },
            });
          }
        }
  
        // inventory_files
        if (files.inventory_files) {
          for (const file of files.inventory_files) {
            await prisma.inventory_files.create({
              data: {
                file_id: uuid(),
                item_id: itemId,
                file_type: file.mimetype,
                file_name: file.filename,
              },
            });
          }
        }

        res.status(200).json({
            status: "success",
            message: "Item updated",
            data: item,
        });
        console.log("Item updated successfully:", item);
    }
    catch (error : any) {
        console.error("Error updating item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update item",
            error: error.message,
        });
    }
}
);

// delete barang by id
DashboardRouter.delete("/delete/:id", async (req: Request, res: Response) => {
    try {
        const itemId = req.params.id;
        const item = await prisma.inventory.delete({
            where: {
                item_id: itemId,
            },
        });
        res.status(200).json({
            status: "success",
            message: "Item deleted successfully",
            data: item,
        });
    } catch (error : any) {
        console.error("Error deleting item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to delete item",
            error: error.message,
        });
    }
}
);

// liat gambar barang by id
DashboardRouter.get("/images/:id", async (req: Request, res: Response) => {
    try {
      const itemId = req.params.id;
      const images = await prisma.images.findMany({
        where: { item_id: itemId },
      });
  
      if (!images || images.length === 0) {
        res.status(404).json({
          status: "error",
          message: "Images not found",
        });
        return;
      }
  
      const fileName = images[0].file_name;
  
      if (!fileName) {
        res.status(404).json({
          status: "error",
          message: "File name is missing",
        });
        return;
      }
  
      const filePath = `src/public/images/${fileName}`;
  
      if (!fs.existsSync(filePath)) {
        res.status(404).json({
          status: "error",
          message: "File not found on server",
        });
        return;
      }
  
      return res.sendFile(fileName, { root: "src/public/images" });
    } catch (error: any) {
      console.error("Error retrieving images:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve images",
        error: error.message,
      });
    }
  });

export default DashboardRouter;




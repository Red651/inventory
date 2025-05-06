"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../generated/prisma/database");
const uuid_1 = require("uuid");
const upload_1 = require("../Middleware/upload");
const fs_1 = __importDefault(require("fs"));
const DashboardRouter = (0, express_1.Router)();
// Barang Dashboard
// add barang
DashboardRouter.post("/add", upload_1.upload.fields([
    { name: "images", maxCount: 5 },
    { name: "inventory_files", maxCount: 5 },
]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formData = req.body;
        const files = req.files;
        const itemId = (0, uuid_1.v4)();
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
        };
        const item = yield database_1.prisma.inventory.create({
            data: itemData,
            include: {
                images: true,
                inventory_files: true,
            },
        });
        // images
        if (files.images) {
            for (const file of files.images) {
                yield database_1.prisma.images.create({
                    data: {
                        image_id: (0, uuid_1.v4)(),
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
                yield database_1.prisma.inventory_files.create({
                    data: {
                        file_id: (0, uuid_1.v4)(),
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
    }
    catch (error) {
        console.error("Error creating item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to create item",
            error: error.message,
        });
    }
}));
// get all barang
DashboardRouter.get("/read", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield database_1.prisma.inventory.findMany({
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
    }
    catch (error) {
        console.error("Error retrieving items:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to retrieve items",
            error: error.message,
        });
    }
}));
// get barang by id
DashboardRouter.get("/read/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.id;
        const item = yield database_1.prisma.inventory.findUnique({
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
    }
    catch (error) {
        console.error("Error retrieving item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to retrieve item",
            error: error.message,
        });
    }
}));
// update barang by id
DashboardRouter.put("/update/:id", upload_1.upload.fields([
    { name: "images", maxCount: 5 },
    { name: "inventory_files", maxCount: 5 },
]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.id;
        const formData = req.body;
        const files = req.files;
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
        const item = yield database_1.prisma.inventory.update({
            where: {
                item_id: itemId,
            },
            data: itemData,
        });
        // images
        if (files.images) {
            for (const file of files.images) {
                yield database_1.prisma.images.create({
                    data: {
                        image_id: (0, uuid_1.v4)(),
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
                yield database_1.prisma.inventory_files.create({
                    data: {
                        file_id: (0, uuid_1.v4)(),
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
    catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update item",
            error: error.message,
        });
    }
}));
// delete barang by id
DashboardRouter.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.id;
        const item = yield database_1.prisma.inventory.delete({
            where: {
                item_id: itemId,
            },
        });
        res.status(200).json({
            status: "success",
            message: "Item deleted successfully",
            data: item,
        });
    }
    catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to delete item",
            error: error.message,
        });
    }
}));
// liat gambar barang by id
DashboardRouter.get("/images/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.id;
        const images = yield database_1.prisma.images.findMany({
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
        if (!fs_1.default.existsSync(filePath)) {
            res.status(404).json({
                status: "error",
                message: "File not found on server",
            });
            return;
        }
        return res.sendFile(fileName, { root: "src/public/images" });
    }
    catch (error) {
        console.error("Error retrieving images:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to retrieve images",
            error: error.message,
        });
    }
}));
exports.default = DashboardRouter;

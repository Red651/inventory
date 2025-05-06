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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../generated/prisma/database");
const UserRouter = (0, express_1.Router)();
// User 
// create user
UserRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formData = req.body;
        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
        };
        const user = yield database_1.prisma.user.create({
            data: userData,
        });
        res.json({
            message: "User created successfully",
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating user",
            success: false,
            error: error.message,
        });
    }
}));
// delete user
UserRouter.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        console.log(userId);
        yield database_1.prisma.user.delete({
            where: {
                id: userId,
            },
        });
        res.json({
            message: "User deleted successfully",
            success: true,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            success: false,
            error: error.message,
        });
    }
}));
// get all users
UserRouter.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield database_1.prisma.user.findMany();
        res.json({
            message: "Users retrieved successfully",
            success: true,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving users",
            success: false,
            error: error.message,
        });
    }
}));
UserRouter.get("/get/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const user = yield database_1.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            res.status(404).json({
                message: "User not found",
                success: false,
            });
            return;
        }
        res.json({
            message: "User retrieved successfully",
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving user",
            success: false,
            error: error.message,
        });
    }
}));

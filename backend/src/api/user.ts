import { Request, Response } from "express";
import { Router } from "express";
import { prisma } from "../generated/prisma/database";

const UserRouter = Router();

// User 

// create user
UserRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const formData = req.body;
        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
        };
        const user = await prisma.user.create({
            data: userData,
        });
        res.json({
            message: "User created successfully",
            success: true,
            data: user,
        });
    } catch (error : any) {
        res.status(500).json({
            message: "Error creating user",
            success: false,
            error: error.message,
        });
    }
});

// delete user
UserRouter.delete("/delete/:id", async (req: Request, res: Response) => {
    try {
        const userId  = parseInt(req.params.id);
        console.log(userId);
        await prisma.user.delete({
            where: {
                id: userId,
            },
        });
        res.json({
            message: "User deleted successfully",
            success: true,
        });
    } catch (error : any) {
        res.status(500).json({
            message: "Error deleting user",
            success: false,
            error: error.message,
        });
    }
});

// get all users
UserRouter.get("/all", async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json({
            message: "Users retrieved successfully",
            success: true,
            data: users,
        });
    } catch (error : any) {
        res.status(500).json({
            message: "Error retrieving users",
            success: false,
            error: error.message,
        });
    }
});

UserRouter.get("/get/:id", async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await prisma.user.findUnique({
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
    } catch (error : any) {
        res.status(500).json({
            message: "Error retrieving user",
            success: false,
            error: error.message,
        });
    }
}
);
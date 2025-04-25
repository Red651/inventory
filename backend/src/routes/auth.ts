import { Request, Response } from "express";
import Prisma from "../generated/prisma/database";
import { signJwt, verifyJwt } from "../auth/jwt";
import { Router } from "express";

const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response) => {
    const formData = req.body;
    const user = await Prisma.user.findFirst({
        where: {
            email: formData.email
        },
    });
    console.log(formData);

    if (!user) {
        res.status(401).json({
            message: "Invalid email or password",
            success: false,
        });
        return;
    }
    const token = signJwt({ id: user.id, email: user.email, role: user.role });
    res.json({
        message: "Login successful",
        success: true,
        token: token,
    });
    return;
});

authRouter.get('/me', async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({
            message: "Unauthorized",
            success: false,
        });
        return;
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyJwt(token);
        const user = await Prisma.user.findUnique({
            where: {
                id: (decoded as any).id,
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
            message: "User data retrieved successfully",
            success: true,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token",
            success: false,
        });
    }
});

authRouter.get('/logout', async (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Logout failed", success: false });
        }
        res.clearCookie("connect.sid");
        res.json({ message: "Logout successful", success: true });
    });
});    

export default authRouter;

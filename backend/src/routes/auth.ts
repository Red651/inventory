import { Request, Response } from "express";
import Prisma from "../generated/prisma/database";
import {signJwt} from "../auth/jwt";
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

    if (!user){
        res.status(401).json({
            message: "Invalid email or password",
            success: false,
        });
        return;
    }
    const token = signJwt({ id: user.id, email: user.email, role : user.role });
    res.json({
        message: "Login successful",
        success: true,
        token: token,
    });
    return;
}
);

export default authRouter;


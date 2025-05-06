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
const database_1 = __importDefault(require("../generated/prisma/database"));
const jwt_1 = require("../auth/jwt");
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const formData = req.body;
    const user = yield database_1.default.user.findFirst({
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
    const token = (0, jwt_1.signJwt)({ id: user.id, email: user.email, role: user.role });
    res.json({
        message: "Login successful",
        success: true,
        token: token,
    });
    return;
}));
authRouter.get('/me', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const decoded = (0, jwt_1.verifyJwt)(token);
        const user = yield database_1.default.user.findUnique({
            where: {
                id: decoded.id,
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
    }
    catch (error) {
        res.status(401).json({
            message: "Invalid or expired token",
            success: false,
        });
    }
}));
authRouter.get('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Logout failed", success: false });
        }
        res.clearCookie("connect.sid");
        res.json({ message: "Logout successful", success: true });
    });
}));
exports.default = authRouter;

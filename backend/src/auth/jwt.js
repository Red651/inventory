"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "rahasia_jing";
const signJwt = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};
exports.signJwt = signJwt;
const verifyJwt = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
    catch (error) {
        throw new Error("Invalid or expired token");
    }
};
exports.verifyJwt = verifyJwt;

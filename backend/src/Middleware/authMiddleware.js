"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "rahasia_jing";
function authMiddleware(req, res, next) {
    var _a;
    const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Unauthorized" });
        }
        req.user = decoded;
        next();
    });
}

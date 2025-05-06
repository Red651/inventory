"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const ensureDir = (dir) => {
    if (!fs_1.default.existsSync(dir))
        fs_1.default.mkdirSync(dir, { recursive: true });
};
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const target = file.fieldname === "images"
            ? "src/public/images"
            : "src/public/inventory_files";
        ensureDir(target);
        cb(null, target);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + path_1.default.extname(file.originalname));
    }
});
exports.upload = (0, multer_1.default)({ storage });

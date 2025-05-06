"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("./auth/passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const auth_1 = __importDefault(require("./routes/auth"));
const dashboard_1 = __importDefault(require("./api/dashboard"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// middleware
dotenv_1.default.config();
const port = process.env.PORT;
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "..", "public")));
// routes
// Login
app.use('/auth', auth_1.default);
// Dashboard Barang
app.use('/dashboard', dashboard_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

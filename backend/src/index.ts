import express, { Request, Response } from 'express';
import cors from 'cors';
import passport from './auth/passport';
import dotenv from "dotenv";
import session from "express-session";
import authRouter from './routes/auth';
import DashboardRouter from './api/dashboard';
import path from 'path';
// import ServerlessHttp from 'serverless-http';

const app = express();

// middleware
dotenv.config()
const port = process.env.PORT
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}))
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60
  }
    })
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use("/public", express.static(path.join(__dirname, "..", "public")));

// routes

// Login
app.use('/auth', authRouter);
// Dashboard Barang
app.use('/dashboard', DashboardRouter);

// module.exports.handler = ServerlessHttp(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

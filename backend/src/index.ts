import express, { Request, Response } from 'express';
import cors from 'cors';
import passport from './auth/passport';
import { prisma } from './generated/prisma/database';
import dotenv from "dotenv";
import session from "express-session";
import authRouter from './routes/auth';

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
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/auth', authRouter);
app.get("/data", async (req : Request, res : Response)=>{
    try{
        const data = await prisma.user.findMany()
        res.json(data)
    }catch{
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

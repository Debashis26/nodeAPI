import { Router } from "express";
import authRouter from "./authRout/authRoute";



const route=Router();
route.use('/',authRouter);

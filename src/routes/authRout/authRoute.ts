import { Router } from "express";
import login  from "../../controllers/loginController/logInController";
const authRouter = Router();


authRouter.post('/',login);
authRouter.post('/registration',login);
export default authRouter;
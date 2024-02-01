import { Request, Response, NextFunction } from 'express';
import { getUser } from "../services/index";
import { user } from '../model/user';

async function restrictToLoggedinUserOnly(req: Request, res: Response, next: NextFunction) {
  const userUid: string | undefined = req.cookies?.uid;

  
  next();
}

async function checkAuth(req: Request, res: Response, next: NextFunction) {
  const userUid: string | undefined = req.cookies?.uid;

  const user = getUser(Number(userUid));

  (req as any).user = user;
  next();
}

export {
  restrictToLoggedinUserOnly,
  checkAuth,
};


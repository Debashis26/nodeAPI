import { Request, Response } from "express";
import { loginService } from "../../services/loginService/loginService";

async function login(req: Request, res: Response) { //ok
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "all fields are required." });
  }
  try {    
    const user = await loginService(username, password);
    res.json(user);
  } catch (error: any) {
    res
      .status(401)
      .json({
        message: "invalid user.",
        error: error.message,
      });
  }
}

export default login;

import { Request, Response } from "express";
import { user } from "../../model/user";
import { createUser } from "../../services/registrationService/regService";

async function registrationController(req: Request, res: Response) {
  try {
    const { id, login: password } = req.body;

    if (!id || !password) {
      return res.status(400).json({ message: "ID and login are required." });
    }

    const newUser = await createUser(id, password);

    if (!newUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    res.status(201).json({
      message: "User registered successfully.",
      user: newUser
    });
  } catch (error: any) {
    res.status(500).json({
      message: "An error occurred during registration.",
      error: error.message
    });
  }
}

import { getUser } from "../../DAO/userDAO/getUserDAO/getUser";

async function loginService(username:string, password: string) {
  try {
    const user = await getUser(username);
    console.log("user", await getUser(username));//error
    if (user !==undefined) {
      return user;
    }
    throw new Error('Invalid credentials.');
  } catch (error) {
    throw error; // re-throw the error to be handled by the caller
  }
}

export { loginService };


import axios from "axios";
import { user } from "../../../model/user";

const apiUrl = "http://localhost:3000";
const getUser = async (username: string) => {

  axios
    .get(`${apiUrl}/users?username=${encodeURIComponent(username)}`)
    .then((response) => {
      const userData= response.data;  
      console.log("userData", userData);    
      return userData;
    })
    .catch((error) => {
      throw error;
    });
};

export { getUser };

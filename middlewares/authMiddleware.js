import { getUserByEmail } from "../models/user/userModel.js";
import { verifyJWT } from "../utils/jwt.js";

export const auth = async (req, res, next) => {
  try {
    //1. recieve the token
    const { authorization } = req.headers;

    //2. create an auth middleware

    const result = verifyJWT(authorization);
    console.log(result);
    //3. validate if token is valid
    if (result?.email) {
      const user = await getUserByEmail(result.email);
      if (user?._id) {
        //user is authorized
        //store user info in the request headers
        user.password = undefined;
        req.userInfo = user;
        return next();
      }
    }
    res.status(403).json({
      error: "Unauthorized",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }

  //4. get user email from token
  //5. get user by email
};

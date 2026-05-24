import jwt from "jsonwebtoken";
import { decodeToken } from "../utils/jwtUtils.js";

async function auth(req, res, next) {
  const token = req.headers.token;
  
  try {
    const decoded = await decodeToken(token);
    const userId = decoded.userId;
    
    if (!userId) { 
      res.status(401).json({ message: "Token malformed" });
      return;
    }

    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }

}

export default auth;

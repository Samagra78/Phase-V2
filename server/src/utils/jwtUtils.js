import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

async function generateToken(payload) {
  const token = await jwt.sign(payload, SECRET_KEY);
  return token;
}

async function decodeToken(token) {
  try {
    const decoded = await jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

export { generateToken, decodeToken };

import express from "express";
import authRoutes from "./routes/authRoutes.js";
import apiRoutes from "./routes/api/api.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

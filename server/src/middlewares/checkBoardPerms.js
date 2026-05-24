import { Members } from "../models/model.js";
import { checkBoardPermission } from "../services/permissionCheckService.js";

async function checkBoardPerms(req, res, next) {
  const userId = req.userId;
  const requiredPermission = req.method.toString();
  const boardId = req.params.boardId;
  const hasPermission = await checkBoardPermission(
    requiredPermission,
    boardId,
    userId,
  );

  if (!hasPermission) {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
}
export default checkBoardPerms;

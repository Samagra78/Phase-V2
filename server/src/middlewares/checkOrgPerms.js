import { Members } from "../models/model.js";
import { checkMemberPermission } from "../services/permissionCheckService.js";

async function checkOrgPerms(req, res, next) {
  const userId = req.userId;
  const requiredPermission = req.method.toString();
  const orgId = req.params.orgId;
  const hasPermission = await checkMemberPermission(
    requiredPermission,
    orgId,
    userId,
  );

  if (!hasPermission) {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
}
export default checkOrgPerms;

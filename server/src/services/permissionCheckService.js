import { Members, Orgs } from "../models/model.js";

async function checkMemberPermission(requiredPermission, orgId, userId) {
    const member = await Members.findOne({ user: userId, org: orgId });
    if (!member) {
        const org = await Orgs.findById(orgId);
        if (org.owner.toString() === userId) {
            return true;
        }
        return false;
    }

    return member.permissions.includes(requiredPermission);
}

async function checkBoardPermission(requiredPermission, boardId, userId) {
    const permission = await Permissions.findOne({ user: userId, board: boardId });
    if (!permission) {
        return false;
    }

    return permission.permissions.includes(requiredPermission);
}

export { checkMemberPermission, checkBoardPermission };
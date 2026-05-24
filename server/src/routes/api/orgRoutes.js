import express from "express";
import { auth, checkOrgPerms } from "../../middlewares/middleware.js";
import { Orgs, Members } from "../../models/model.js";

const router = express.Router();

// AUTHENTICATED - All routes in this file require the user to be authenticated
router.use(auth);

// GET - display a org with all its details
router.get("/:orgId", (req, res) => {});

// GET - display all the orgs the user is part of
router.get("/users/:userId", (req, res) => {});

// GET - search for a org by its name and description
router.get("/search", (req, res) => {
  const { userId } = req.query;
});

// POST - create a new org and add to the database
router.post("", async (req, res) => {
  const owner = req.userId;
  const { name, description } = req.body;

  const orgExists = await Orgs.findOne({ name, owner });

  if (orgExists) {
    res
      .status(400)
      .json({ message: "Organization with the same name already exists" });
    return;
  }

  const org = new Orgs({ name, description, owner });
  await org.save();

  res.json({
    message: "Organization created successfully",
  });
});

// PATCH - add a member to the org
router.patch("/:orgId/members/:userId", checkOrgPerms, async (req, res) => {
  const { orgId, userId } = req.params;
  const org = await Orgs.findById(orgId);

  if (!org) {
    res.status(404).json({ message: "Organization not found" });
    return;
  }

  const memberExists = await Members.findOne({ org: orgId, user: userId });

  if (memberExists) {
    res
      .status(400)
      .json({ message: "User is already a member of the organization" });
    return;
  }

  await Members.create({ org: orgId, user: userId, permissions: [] });

  res.json({
    message: "Member added to the organization successfully",
  });
});

// PUT - update the details of a org
router.put("/:orgId", checkOrgPerms, async (req, res) => {
  const orgId = req.params.orgId;
  const { title,description } = req.body;

  const org = await Orgs.findById(orgId);

  if (!org) {
    res.status(404).json({ message: "Organization not found" });
    return;
  }

  org.title = title;
  org.description = description;
  await org.save();

  res.json({
    message: "Organization updated successfully",
  });
});

// PATCH - update the permissions of a member in the org
router.patch("/:orgId/members/:userId/permissions", (req, res) => {
  
});

// DELETE - delete a org from the database
router.delete("/:orgId", (req, res) => {});

// DELETE - remove a member from the org
router.delete("/:orgId/members/:userId", (req, res) => {});

export default router;

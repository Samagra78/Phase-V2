import express from 'express';

const router = express.Router();

// GET - display a org with all its details
router.get("/:orgId", (req, res) => {});

// GET - display all the orgs the user is part of
router.get("/users/:userId", (req, res) => {});

// GET - search for a org by its name and description
router.get("/search", (req, res) => {
  const { userId } = req.query;
});

// POST - create a new org and add to the database
router.post("", (req, res) => {});

// POST - add a member to the org
router.post("/:orgId/members/:userId", (req, res) => {});

// PUT - update the details of a org
router.put("/:orgId", (req, res) => {});

// PUT - update the permissions of a member in the org
router.put("/:orgId/members/:userId/permissions", (req, res) => {});

// DELETE - delete a org from the database
router.delete("/:orgId", (req, res) => {});

// DELETE - remove a member from the org
router.delete("/:orgId/members/:userId", (req, res) => {});

export default router;

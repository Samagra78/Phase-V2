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

// PUT - update the details of a org
router.put("/:orgId", (req, res) => {});

// DELETE - delete a org from the database
router.delete("/:orgId", (req, res) => {});

export default router;

import express from 'express';

const router = express.Router();

// GET - display an issue with all its details
router.get("/:issueId", (req, res) => {});

// GET - display all the issues of a particular board
router.get("/boards/:boardId", (req, res) => {});

// GET - display all the issues of a particular sprint
router.get("/sprints/:sprintId", (req, res) => {});

// GET - search for an issue by its title and description
router.get("/search", (req, res) => {
  const { orgId, boardId, sprintId, title } = req.query;
});

// POST - create a new issue and add to the database
router.post("", (req, res) => {});

// PUT - update the details of an issue
router.put("/:issueId", (req, res) => {});

// DELETE - delete an issue from the database
router.delete("/:issueId", (req, res) => {});

export default router;

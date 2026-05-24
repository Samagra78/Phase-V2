import express from 'express';

const router = express.Router();

// GET - display a board with all its details
router.get("/:boardId", (req, res) => {});

// GET - display all the boards of a particular organization
router.get("/orgs/:orgId", (req, res) => {});

// GET - display all the boards of a particular sprint
router.get("/sprints/:sprintId", (req, res) => {});

// GET - search for a board by its name and description
router.get("/search", (req, res) => {
  const { orgId, sprintId, title } = req.query;
});

// POST - create a new board and add to the database
router.post("", (req, res) => {});

// PUT - update the details of a board
router.put("/:boardId", (req, res) => {});

// DELETE - delete a board from the database
router.delete("/:boardId", (req, res) => {});


export default router;

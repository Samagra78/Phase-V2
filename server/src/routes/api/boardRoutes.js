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

// POST - add user to board
router.post("/:boardId/users/:userId", (req, res) => {});

// PUT - update the details of a board
router.put("/:boardId", (req, res) => {});

// PUT - update the permissions of a member in the board
router.put("/:boardId/users/:userId/permissions", (req, res) => {});

// DELETE - delete a board from the database
router.delete("/:boardId", (req, res) => {});

// DELETE - remove user from board
router.delete("/:boardId/users/:userId", (req, res) => {});


export default router;

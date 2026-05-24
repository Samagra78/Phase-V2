const express = require("express");

const router = express.Router();

// GET - display the details of a particular sprint
router.get("/:sprintId", (req, res) => {});

// GET - display all the sprints of a particular organization
router.get("/orgs/:orgId", (req, res) => {});

// GET - display all the sprints of a particular board
router.get("/boards/:boardId", (req, res) => {});

//GET - display all sprints working on the specific issue or related issues
router.get("/issues/:issueId", (req, res) => {});

//GET - search for a sprint by its name and goal
router.get("/search", (req, res) => {
  const { name } = req.query;
});

// POST - create a new sprint and add to the database
router.post("", (req, res) => {});

// PUT - update the details of a sprint
router.put("/:sprintId", (req, res) => {});

// DELETE - delete a sprint from the database
router.delete("/:sprintId", (req, res) => {});

module.exports = router;

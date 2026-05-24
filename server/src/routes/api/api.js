import express from 'express';
import orgRoutes from './orgRoutes.js';
import boardRoutes from './boardRoutes.js';
import issueRoutes from './issueRoutes.js';
import sprintRoutes from './sprintRoutes.js';

const router = express.Router();

router.use("/orgs", orgRoutes);
router.use("/boards", boardRoutes);
router.use("/issues", issueRoutes);
router.use("/sprints", sprintRoutes);

export default router;

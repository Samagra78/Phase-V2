const express = require('express');
const authRoutes = require('./routes/authRoutes');
const organizationRoutes = require('./routes/api/orgRoutes.js');
const boardRoutes = require('./routes/api/boardRoutes.js');
const issueRoutes = require('./routes/api/issueRoutes.js');
const sprintRoutes = require('./routes/api/sprintRoutes.js');

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/issues", issueRoutes);
app.use("/api/sprints", sprintRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
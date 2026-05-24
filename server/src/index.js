const express = require('express');
const authRoutes = require('./routes/authRoutes');
const organizationManagementRoutes = require('./routes/api/orgManagement.js');
const boardManagementRoutes = require('./routes/api/boardManagement.js');
const issueTrackingRoutes = require('./routes/api/issueTracking.js');
const sprintManagementRoutes = require('./routes/api/sprintManagement.js');

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/organizations", organizationManagementRoutes);
app.use("/api/boards", boardManagementRoutes);
app.use("/api/issues", issueTrackingRoutes);
app.use("/api/sprints", sprintManagementRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
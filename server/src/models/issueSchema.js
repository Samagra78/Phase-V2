import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
    title: String,
    description: String,
    assignee: mongoose.Schema.Types.ObjectId,
    boardId: mongoose.Schema.Types.ObjectId,
    status: String,
    priority: String
})

export default issueSchema;
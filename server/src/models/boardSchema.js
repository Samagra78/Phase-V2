import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    title: String,
    description: String,
    issues: [mongoose.Schema.Types.ObjectId],
    priority: String
})

export default boardSchema;
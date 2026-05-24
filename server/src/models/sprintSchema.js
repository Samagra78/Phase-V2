import mongoose from 'mongoose';

const sprintSchema = new mongoose.Schema({
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    boardId: mongoose.Schema.Types.ObjectId
})

export default sprintSchema;
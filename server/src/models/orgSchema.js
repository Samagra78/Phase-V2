import mongoose from 'mongoose';

const orgSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner: mongoose.Schema.Types.ObjectId,
    boards: [mongoose.Schema.Types.ObjectId],
    sprints: [mongoose.Schema.Types.ObjectId]
})

export default orgSchema;
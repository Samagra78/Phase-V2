import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    org: mongoose.Schema.Types.ObjectId,
    permissions: [String]
})

export default memberSchema;
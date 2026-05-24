import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    org: mongoose.Schema.Types.ObjectId,
    permissions: [String]
})

export default permissionSchema;
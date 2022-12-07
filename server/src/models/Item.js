import mongoose, { Schema } from 'mongoose';

const Item = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Item', Item);
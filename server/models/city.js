import mongoose from 'mongoose';

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

export const city = mongoose.model('city', new Schema({
    name: {
        type: String,
        index: {
            unique: true
        }
    },
    country: { type: ObjectId, ref: 'country' },
    active: Boolean
}));

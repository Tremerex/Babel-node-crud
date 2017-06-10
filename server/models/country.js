import mongoose from 'mongoose';

export const country = mongoose.model('country', new mongoose.Schema({
    name: {
        type: String,
        index: {
            unique: true
        }
    },
    active: Boolean
}));

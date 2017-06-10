import mongoose from 'mongoose';
import city from './city'; 

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

export const user = mongoose.model('user', new Schema({
    name: String,
    city: { type: ObjectId, ref: 'city' },
    active: Boolean
}));

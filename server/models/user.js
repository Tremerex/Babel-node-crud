import mongoose from 'mongoose';
import city from './city'; 

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var user = mongoose.model('user', new Schema({
    name: String,
    city: { type: ObjectId, ref: 'city' },
    active: Boolean
}));

export default user;
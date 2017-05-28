import mongoose from 'mongoose';

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var city = mongoose.model('city', new Schema({
    name: {
        type: String,
        index: {
            unique: true
        }
    },
    country: { type: ObjectId, ref: 'country' },
    active: Boolean
}));

export default city;
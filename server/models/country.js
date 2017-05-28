import mongoose from 'mongoose';

var country = mongoose.model('country', new mongoose.Schema({
    name: {
        type: String,
        index: {
            unique: true
        }
    },
    active: Boolean
}));

export default country;
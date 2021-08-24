const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const TodoSchema = new mongoose.Schema({
    userId: String,
    listtodos: [{
    _id : {
        type: ObjectId,
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add text']
    },
    important: {
        type: Boolean,
        required: false
    },
    done: {
        type: Boolean,
        required: false
    }}]
});

module.exports=mongoose.model('TodoItem', TodoSchema);
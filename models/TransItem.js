const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const TransSchema = new mongoose.Schema({
    userId: String,
    listtrans: [{
    _id : {
        type: ObjectId,
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive number']
    },
    expensetype: {
        type: String,
        required: [true, 'Please choose an expense type']
    }}]
});

module.exports=mongoose.model('TransItem', TransSchema);
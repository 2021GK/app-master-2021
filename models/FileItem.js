const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const FileSchema = new mongoose.Schema({
    userId: String,
    listfiles: [{
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }}]
});

module.exports = mongoose.model('FileItem', FileSchema);

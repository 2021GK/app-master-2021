const express=require('express');
const router=express.Router();
const {upload} = require('../middleware/fileupload');
const {getPrivateData, getTodos, addTodo, updateTodo,updateTodo1, deleteTodo, getTransactions, deleteTransaction, addTransaction, getPins, addPin, deletePin, getFiles, addFile, deleteFile} = require('../controllers/private');
const {protect} = require("../middleware/auth");
router.route("/").get(protect,getPrivateData);
router.route("/todo").post(addTodo).get(getTodos);
router.route("/todo/up/:id").put(updateTodo);
router.route("/todo/up1/:id").put(updateTodo1);
router.route("/todo/:user/:id").delete(deleteTodo);

router.route("/trans").get(getTransactions).post(addTransaction);
router.route("/trans/:user/:id").delete(deleteTransaction);

router.route("/pins").get(getPins).post(addPin);
router.route("/pins/:user/:id").delete(deletePin);

router.route('/files').post(upload.single('file'), addFile);
router.route('/files').get(getFiles);
router.route('/files/:user/:id').delete(deleteFile);
module.exports=router;
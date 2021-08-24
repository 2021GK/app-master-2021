const TodoItem = require('../models/TodoItem');
const TransItem = require('../models/TransItem');
const PinItem = require('../models/PinItem');
const FileItem = require('../models/FileItem');
const mongoose = require('mongoose');
const url = require('url');
const fs = require('fs');




const ObjectId = mongoose.Types.ObjectId;


  
exports.getPrivateData = (req,res,next) => {
    res.status(200).json({
        success:true,
        data: "Dobili ste pristup privatnim podacima"
    });};


exports.getTodos =async (req,res,next) => {
    const queryObject = url.parse(req.url,true).query;
    let user=queryObject.user;
    let temp=[];
    try {
        const listitems = await TodoItem.findOne({ userId: user }).exec();
        if (!listitems) {
            return res.status(200).json({
                success: true,
                data: temp
            })
        } else {
        return res.status(200).json({
            success: true,
            data: listitems.listtodos
        }); }
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Greska na serveru'
        });

    }
}

exports.getFiles = async (req,res,next) => {
    const queryObject = url.parse(req.url,true).query;
    let user=queryObject.user;
    let temp=[];

    try {
        const listitems = await FileItem.findOne({ userId: user }).exec();
        if (!listitems) {
            return res.status(200).json({
                success: true,
                data: temp
            })
        } else {
        return res.status(200).json({
            success: true,
            data: listitems.listfiles
        }); }
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Greska na serveru'
        });

    }

}

exports.getTransactions =async (req,res,next) => {
    const queryObject = url.parse(req.url,true).query;
    let user=queryObject.user;
    let temp=[];
    try {
        const listitems = await TransItem.findOne({ userId: user }).exec();
        if (!listitems) {
            return res.status(200).json({
                success: true,
                data: temp
            })
        } else {
        return res.status(200).json({
            success: true,
            data: listitems.listtrans
        }); }
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Greska na serveru'
        });

    }
}


exports.getPins =async (req,res,next) => {
    const queryObject = url.parse(req.url,true).query;
    let user=queryObject.user;
    let temp=[];
    try {
        const pinitems = await PinItem.findOne({ userId: user }).exec();

        if (!pinitems) {
            return res.status(200).json({
                success: true,
                data: temp
            })
        } else {
        return res.status(200).json({
            success: true,
            data: pinitems.listpins
        }); }
    }catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Greska na serveru'
        });

    }
}

exports.addTodo =async (req,res,next) => {
    try {
     
    const todoItems = req.body.currentData;
    const userEmail=req.body.currentEmail;

    const idObject = new ObjectId(todoItems._id);
    todoItems._id = idObject;

    const todos = await TodoItem.findOne({userId: userEmail}).exec();
    if (!todos) {
        await TodoItem.create({
            userId: userEmail,
            listtodos: todoItems,
        }); 
        return res.status(201).json({success: true, data:todoItems });
    } else {
        todos.listtodos.push(todoItems);
        await todos.save();
        return res.status(201).json({success: true, data:todoItems });  
    }

  } catch (err) {
   if(err.name === 'ValidationError') {
        const messages=Object.values(err.errors).map(val =>val.message);

        res.status(400).json({success:false, error:messages});
   } else {
       return res.status(500).json({ 
           success: false,
           error: 'Greska na serveru'
       });
   }
  }
}

exports.addFile =async (req,res,next) => {
    try {
    const user = req.body.currentEmail;
    const pomobj = {
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2)
    }
    
    const files = await FileItem.findOne({userId: user}).exec();
    if (!files) {
        await FileItem.create({
            userId: user,
            listfiles: pomobj,
        }); 
        return res.status(201).json({success: true, data:pomobj });
    } else {
        files.listfiles.push(pomobj);
        await files.save();
        return res.status(201).json({success: true, data:pomobj });  
    }

  } catch (err) {
   if(err.name === 'ValidationError') {
        const messages=Object.values(err.errors).map(val =>val.message);

        res.status(400).json({success:false, error:messages});
   } else {
       return res.status(500).json({ 
           success: false,
           error: 'Greska na serveru'
       });
   }
  }
}

exports.addPin =async (req,res,next) => {
    try {
        const pinItems = req.body.currentData;
        const userEmail=req.body.currentEmail;
    
        const idObject = new ObjectId(pinItems._id);
        pinItems._id = idObject;
        const pins = await PinItem.findOne({userId: userEmail}).exec();
    if (!pins) {
        await PinItem.create({
            userId: userEmail,
            listpins: pinItems,
        }); 
        return res.status(201).json({success: true, data:pinItems });
    } else {
        pins.listpins.push(pinItems);
        await pins.save();
        return res.status(201).json({success: true, data:pinItems });  
    }

  } catch (err) {
   if(err.name === 'ValidationError') {
        const messages=Object.values(err.errors).map(val =>val.message);

        res.status(400).json({success:false, error:messages});
   } else {
       return res.status(500).json({ 
           success: false,
           error: 'Greska na serveru'
       });
   }
  }
}


exports.addTransaction =async (req,res,next) => {
    try {
    const transItems = req.body.currentData;
    const userEmail=req.body.currentEmail;

    const idObject = new ObjectId(transItems._id);
    transItems._id = idObject;

    const transactions = await TransItem.findOne({userId: userEmail}).exec();
    if (!transactions) {
        await TransItem.create({
            userId: userEmail,
            listtrans: transItems,
        }); 
        return res.status(201).json({success: true, data:transItems });
    } else {
        transactions.listtrans.push(transItems);
        await transactions.save();
        return res.status(201).json({success: true, data:transItems });  
    }
    }catch (err) {
        if(err.name === 'ValidationError') {
             const messages=Object.values(err.errors).map(val =>val.message);
     
             res.status(400).json({success:false, error:messages});
        } else {
            return res.status(500).json({ 
                success: false,
                error: 'Greska na serveru'
            });
        }
       }


}

exports.updateTodo =async (req,res,next) => {
    try {
        const user=req.body.user;
        const todo = await TodoItem.findOne({userId: user}).exec();
        const id=req.params.id;
        todo.listtodos.map(m=>m._id.toString()===id && (m.done=!m.done));
        todo.listtodos.map(m=>m._id.toString()===id && m.important===true ? m.important=false : m.important);
        
        await todo.save();
        return res.status(200).json({success: true, data: todo});
        }catch (err) {
        return res.status(500).json({
            success:false, error: 'Greska na serveru'
        });

    }
}


exports.updateTodo1 =async (req,res,next) => {
    try {

        const user=req.body.user;
        const todo = await TodoItem.findOne({userId: user}).exec();
        const id=req.params.id;
        todo.listtodos.map(m=>m._id.toString()===id && (m.important=!m.important));
        await todo.save();
            
        return res.status(200).json({success: true, data: todo});
    } catch (err) {
        return res.status(500).json({
            success:false, error: 'Greska na serveru'
        });

    }
}

exports.deleteTodo =async (req,res,next) => {
    const user=req.params.user;
    const id=req.params.id;
    try {
        
        const todo = await TodoItem.findOne({userId: user}).exec();
        todo.listtodos.pull({_id: id});
        await todo.save();
        return res.status(200).json({success: true, data: todo});
    } catch (err) {
        return res.status(500).json({
            success:false, error: 'Greska na serveru'
        });

    }
}

exports.deletePin =async (req,res,next) => {
    const user=req.params.user;
    const id=req.params.id;
    try {
        
        const pin = await PinItem.findOne({userId: user}).exec();
        pin.listpins.pull({_id: id});
        await pin.save();
        return res.status(200).json({success: true, data: pin});
    } catch (err) {
        return res.status(500).json({
            success:false, error: 'Greska na serveru'
        });

    }
}
exports.deleteTransaction =async (req,res,next) => {
    const user=req.params.user;
    const id=req.params.id;
    try {
        const transaction = await TransItem.findOne({userId: user}).exec();
        transaction.listtrans.pull({_id: id});
        await transaction.save();
        return res.status(200).json({success: true, data: transaction});
    }catch (err) {
        return res.status(500).json({
            success:false, error: 'Greska na serveru'
        });

    }
}

exports.deleteFile =async (req,res,next) => {
    const user=req.params.user;
    const id=req.params.id; 
    try {
        const file = await FileItem.findOne({userId: user}).exec();
        const pathfileitem = file.listfiles.filter(m =>m._id.toString() ===id);
        const pathfile = pathfileitem[0].filePath;
        file.listfiles.pull({_id: id});
        await file.save();
        fs.unlink(pathfile, (err) => {
            if (err) throw err;
        });
        return res.status(200).json({success: true, data: file});
    }catch (err) {
        return res.status(500).json({
            success:false, error: 'Greska na serveru'
        });

    }
}

const fileSizeFormatter= (bytes, decimal) => {
    if (bytes===0) {
        return '0 bytes';
    }
    const dm= decimal || 2;
    const sizes= ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index=Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
}
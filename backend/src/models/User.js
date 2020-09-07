const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    role:{
        type: String,
        default: 'com'
    },
    uid:{
        type: String,
        unique: true
    }
});

const UserData = mongoose.model('User', UserSchema);

class User {
    
    //Create
    static newUser(data){
		return new Promise((resolve, reject) => {
			UserData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllUsers(){
        return new Promise((resolve, reject) => {
            UserData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateUser(id, user) {
        return new Promise((resolve, reject) => {
            UserData.findByIdAndUpdate(id, user).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            UserData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
}

module.exports = User;
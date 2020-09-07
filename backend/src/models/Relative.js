const mongoose = require('mongoose');

const RelativeSchema = new mongoose.Schema({
    associatedID: {
        type: String,
        required: true
    },
    familyBond: {
        type: String,
        required: true
    },//laço familiar
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String
    },
    rg: {
        type: String
    },
    passport: {
        type: String
    },
    passportValidity: {
        type: String
    },
    birthDate: {
        type: Date
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    phone: {
        type: Number,
        unique: true
    }
});

const RelativeData = mongoose.model('Relative', RelativeSchema);

class Relative {
    //Create
    static newRelative(data){
		return new Promise((resolve, reject) => {
			RelativeData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllRelatives(){
        return new Promise((resolve, reject) => {
            RelativeData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateRelative(id, relative) {
        return new Promise((resolve, reject) => {
            RelativeData.findByIdAndUpdate(id, relative).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteRelative(id) {
        return new Promise((resolve, reject) => {
            RelativeData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Relative;
const mongoose = require('mongoose');

const CompanionSchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    cpf: {
        type: String,
        unique: true
    },
    rg: {
        type: String,
        unique: true
    },
    passport: {
        type: String
    },
    passportValidity: {
        type: Date
    },
    birthDate: {
        type: Date
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: Number,
        unique: true
    }
});

const CompanionData = mongoose.model('Companion', CompanionSchema);

class Companion {
    //Create
    static newCompanion(data){
		return new Promise((resolve, reject) => {
			CompanionData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllCompanions(){
        return new Promise((resolve, reject) => {
            CompanionData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateCompanion(id, companion) {
        return new Promise((resolve, reject) => {
            CompanionData.findByIdAndUpdate(id, companion).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteCompanion(id) {
        return new Promise((resolve, reject) => {
            CompanionData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Companion;
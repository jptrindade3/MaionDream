const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    cpf: {
        type: String,
        unique: true,
        required: true
    },
    rg: {
        type: String,
        unique: true
    },
    birthDate: {
        type: Date
    },
    landline: {
        type: Number,
        unique: true
    },//telefone fixo
    phone: {
        type: Number,
        unique: true
    },
    maritalStatus: {
        type: String
    },//estado civil
    passport: {
        type: String
    },
    passportValidity: {
        type: Date
    },
    profession: {
        type: String
    },
    streetName: {
        type: String
    },
    houseNumber: {
        type: String
    },
    neighborhood: {
        type: String
    },
    addressComplement: {
        type: String
    },//Número de apartamento, coisas assim
    city: {
        type: String
    },
    state: {
        type: String
    },
    facebook: {
        type: String,
        unique: true
    },
    instagram: {
        type: String,
        unique: true
    },
    twitter: {
        type: String,
        unique: true
    },
    otherSocialMedia: [{
        socialMediaName: {
            type: String,
        },
        nickName: {
            type: String,
            unique: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CustomerData = mongoose.model('Customer', CustomerSchema);

class Customer {
    //Create
    static newCustomer(data){
		return new Promise((resolve, reject) => {
			CustomerData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllCustomers(){
        return new Promise((resolve, reject) => {
            CustomerData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateCustomer(id, customer) {
        return new Promise((resolve, reject) => {
            CustomerData.findByIdAndUpdate(id, customer).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteCustomer(id) {
        return new Promise((resolve, reject) => {
            CustomerData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Customer;
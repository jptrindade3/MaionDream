const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true,
    },

    origin: {
        type: String
    },

    destiny: {
        type: String
    },

    transferDate: {
        type: Date
    },

    transferSchedule: {
        type: Date
    },

    transferInf: {
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    },

    transferChd: {
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    },

    transferAdt: {
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    },

    currency: {
        type: String
    },

    totalPrice: {
        type: Number
    }
});

const TransferData = mongoose.model('Transfer', TransferSchema);

class Transfer {
    //Create
    static newTransfer(data){
		return new Promise((resolve, reject) => {
			TransferData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllTransfers(){
        return new Promise((resolve, reject) => {
            TransferData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateTransfer(id, Transfer) {
        return new Promise((resolve, reject) => {
            TransferData.findByIdAndUpdate(id, Transfer).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteTransfer(id) {
        return new Promise((resolve, reject) => {
            TransferData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Transfer;
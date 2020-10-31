const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true,
    },

    serviceType: {
        type: String
    },

    serviceName: {
        type: String
    },
        
    inf: {
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    },

    chd: {
        price: {
            type: Number
        },
        amount: {
            type: Number
        }
    },

    adt: {
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

const ServiceData = mongoose.model('Service', ServiceSchema);

class Service {
    //Create
    static newService(data){
		return new Promise((resolve, reject) => {
			ServiceData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllServices(){
        return new Promise((resolve, reject) => {
            ServiceData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateService(id, Service) {
        return new Promise((resolve, reject) => {
            ServiceData.findByIdAndUpdate(id, Service).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteService(id) {
        return new Promise((resolve, reject) => {
            ServiceData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Service;
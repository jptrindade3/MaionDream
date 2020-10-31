const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true,
    },

    cityID: {
        type: String,
        required: true,
    },

    category: {
        type: String
    },

    pickup: {
        location: {
            type: String
        },
        date: {
            type: Date
        }
    },

    dropOff: {
        location: {
            type: String
        },
        date: {
            type: Date
        }
    },

    rentPrice: {
        type: Number
    },

    insurance: {
        type: String
    },

    others: {
        type: String
    },

    currency: {
        type: String
    }
});

const CarData = mongoose.model('Car', CarSchema);

class Car {
    //Create
    static newCar(data){
		return new Promise((resolve, reject) => {
			CarData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllCars(){
        return new Promise((resolve, reject) => {
            CarData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateCar(id, Car) {
        return new Promise((resolve, reject) => {
            CarData.findByIdAndUpdate(id, Car).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteCar(id) {
        return new Promise((resolve, reject) => {
            CarData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Car;
const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
    },
    coin: {
        type: String,
        required: true,
    }
});

const CityData = mongoose.model('City', CitySchema);

class City {
    //Create
    static newCity(data){
		return new Promise((resolve, reject) => {
			CityData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllCities(){
        return new Promise((resolve, reject) => {
            CityData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateCity(id, City) {
        return new Promise((resolve, reject) => {
            CityData.findByIdAndUpdate(id, City).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteCity(id) {
        return new Promise((resolve, reject) => {
            CityData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = City;
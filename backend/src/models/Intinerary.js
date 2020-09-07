const mongoose = require('mongoose');

const IntinerarySchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true
    },
    beginingDay: {
        type: Date
    },
    lastDay: {
        type: Date
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    description: {
        type: String
    }
});

const IntineraryData = mongoose.model('Intinerary', IntinerarySchema);

class Intinerary {
    //Create
    static newIntinerary(data){
		return new Promise((resolve, reject) => {
			IntineraryData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllIntinerarys(){
        return new Promise((resolve, reject) => {
            IntineraryData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateIntinerary(id, intinerary) {
        return new Promise((resolve, reject) => {
            IntineraryData.findByIdAndUpdate(id, intinerary).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteIntinerary(id) {
        return new Promise((resolve, reject) => {
            IntineraryData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Intinerary;
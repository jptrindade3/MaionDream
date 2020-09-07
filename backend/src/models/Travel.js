const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
    travelOwnerID: {
        type: String,
        required: true,
    },
    travelID: {
        type: String,
        required: true,
        unique: true
    },
    travelValue: {
        type: Number
    },
    finished: {
        type:Boolean,
        default: false
    }
});

const TravelData = mongoose.model('Travel', TravelSchema);

class Travel {
    //Create
    static newTravel(data){
		return new Promise((resolve, reject) => {
			TravelData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllTravels(){
        return new Promise((resolve, reject) => {
            TravelData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateTravel(id, travel) {
        return new Promise((resolve, reject) => {
            TravelData.findByIdAndUpdate(id, travel).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteTravel(id) {
        return new Promise((resolve, reject) => {
            TravelData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Travel;
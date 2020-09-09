const mongoose = require('mongoose');

const DestinySchema = new mongoose.Schema({
    travelID: {
        type: String,
        required: true
    },
    destinyID: {
        type: String,
        required: true
    },
    coin: {
        type: String,
        required: true
    }
});

const DestinyData = mongoose.model('Destiny', DestinySchema);

class Destiny {
    //Create
    static newDestiny(data){
		return new Promise((resolve, reject) => {
			DestinyData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllDestinys(){
        return new Promise((resolve, reject) => {
            DestinyData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateDestiny(id, destiny) {
        return new Promise((resolve, reject) => {
            DestinyData.findByIdAndUpdate(id, destiny).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteDestiny(id) {
        return new Promise((resolve, reject) => {
            DestinyData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Destiny;
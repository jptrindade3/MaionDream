const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    cityID: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    hotelName:{
        type: String,
        required: true
    },
    peopleAmount: {
        type: Number,
        required: true
    }, //quantidade de pessoas
    roomCategory: {
        type: String,
        required: true
    },
    pensionType: {
        type: String,
        required: true
    },
    chargePerDay: {
        type: Number,
        required: true
    }, //diária
    dayAmount: {
        type: Number,
        required: true
    }, //quantidade de dias
    roomAmount: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    CancelationDeadline: {
        type: String,
        required: true
    }
});

const HotelData = mongoose.model('Hotel', HotelSchema);

class Hotel {
    //Create
    static newHotel(data){
		return new Promise((resolve, reject) => {
			HotelData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllHotels(){
        return new Promise((resolve, reject) => {
            HotelData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateHotel(id, Hotel) {
        return new Promise((resolve, reject) => {
            HotelData.findByIdAndUpdate(id, Hotel).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteHotel(id) {
        return new Promise((resolve, reject) => {
            HotelData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = Hotel;
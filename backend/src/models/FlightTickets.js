const mongoose = require('mongoose');

const FlightTicketsSchema = new mongoose.Schema({
    ageGroup: {
        type: String,
        enum: ['inf', 'chd', 'adt'],
        required: true
    },
    destinyID: {
        type: String,
    },
    firstClass: {
        tariffPrice: {
            type: Number
        },
        boardingPrice: {
            type: Number
        },
        emissionPrice: {
            type: Number
        },
        ticketAmount: {
            type: Number
        },
        totalPrice: {
            type: Number
        }
    },
    executiveClass: {
        tariffPrice: {
            type: Number
        },
        boardingPrice: {
            type: Number
        },
        emissionPrice: {
            type: Number
        },
        ticketAmount: {
            type: Number
        },
        totalPrice: {
            type: Number
        }
    },
    economicClass: {
        tariffPrice: {
            type: Number
        },
        boardingPrice: {
            type: Number
        },
        emissionPrice: {
            type: Number
        },
        ticketAmount: {
            type: Number
        },
        totalPrice: {
            type: Number
        }
    }
});

const FlightTicketsData = mongoose.model('FlightTickets', FlightTicketsSchema);

class FlightTickets {
    //Create
    static newFlightTickets(data){
		return new Promise((resolve, reject) => {
			FlightTicketsData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllFlightTicketss(){
        return new Promise((resolve, reject) => {
            FlightTicketsData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateFlightTickets(id, FlightTickets) {
        return new Promise((resolve, reject) => {
            FlightTicketsData.findByIdAndUpdate(id, FlightTickets).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteFlightTickets(id) {
        return new Promise((resolve, reject) => {
            FlightTicketsData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = FlightTickets;
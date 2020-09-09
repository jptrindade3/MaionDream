const mongoose = require('mongoose');

const FlightScheduleSchema = new mongoose.Schema({
    destinyID: {
        type: String,
        required: true
    },
    flightID: {
        type: String,
        required: true
    },
    flightDeparture: {
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        airport: {
            type: String,
            required: true
        }
    },
    flightDestination: {
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        airport: {
            type: String,
            required: true
        }
    },
});

const FlightScheduleData = mongoose.model('FlightSchedule', FlightScheduleSchema);

class FlightSchedule {
    //Create
    static newFlightSchedule(data){
		return new Promise((resolve, reject) => {
			FlightScheduleData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllFlightSchedules(){
        return new Promise((resolve, reject) => {
            FlightScheduleData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateFlightSchedule(id, FlightSchedule) {
        return new Promise((resolve, reject) => {
            FlightScheduleData.findByIdAndUpdate(id, FlightSchedule).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteFlightSchedule(id) {
        return new Promise((resolve, reject) => {
            FlightScheduleData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = FlightSchedule;
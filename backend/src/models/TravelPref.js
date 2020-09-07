const mongoose = require('mongoose');

const TravelPrefSchema = new mongoose.Schema({
    associatedID: {
        type: String,
        required: true
    },
    needs: {
        status: {
            type: Boolean
        },
        knowledge: {
            type: Boolean
        },
        newExperiences: {
            type: Boolean
        },
        fun: {
            type: Boolean
        },
        welBeing: {
            type: Boolean
        }, //Bem-estar
        exclusivity: {
            type: Boolean
        },
        otherNeeds: [{
            needName: {
                type: String
            }
        }]
    },
    profile: {
        sports: {
            type: Boolean
        },
        refined: {
            type: Boolean
        },
        simple: {
            type: Boolean
        },
        cult: {
            type: Boolean
        },
        food: {
            type: Boolean
        },
        wines: {
            type: Boolean
        },
        otherProfiles: [{
            profileName: {
                type: String
            }
        }]
    },
    hotel: {
        contemporary: {
            type: Boolean
        },
        classic: {
            type: Boolean
        },
        boutique: {
            type: Boolean
        },
        simple: {
            type: Boolean
        },
        highFloor: {
            type: Boolean
        },
        lowFloor: {
            type: Boolean
        },
        otherHotel: [{
            hotelName: {
                type: String
            }
        }]
    },
    resort: {
        type: Boolean
    },
    budget: {
        type: Number
    },
    planeClass: {
        cheap: {
            type: Boolean
        },
        business: {
            type: Boolean
        },
        firstClass: {
            type: Boolean
        }
    },
    planeSeat: {
        window: {
            type: Boolean
        },
        corridor: {
            type: Boolean
        },
        middle: {
            type: Boolean
        },
    },
    sports: {
        racing: {
            type: Boolean
        },
        bike: {
            type: Boolean
        },
        swimming: {
            type: Boolean
        },
        workout: {
            type: Boolean
        },
        fishing: {
            type: Boolean
        },
        scubaDiving: {
            type: Boolean
        },
        golf: {
            type: Boolean
        },
        tennis: {
            type: Boolean
        },
        otherSports: [{
            sportsName: {
                type: String
            }
        }]
    },
    gastronomy: {
        italian: {
            type: Boolean
        },
        japanese: {
            type: Boolean
        },
        mediterranean: {
            type: Boolean
        },
        indian: {
            type: Boolean
        },
        asian: {
            type: Boolean
        },
        french: {
            type: Boolean
        },
        seafood: {
            type: Boolean
        },
        meats: {
            type: Boolean
        },
        vegan: {
            type: Boolean
        },
        vegetarian: {
            type: Boolean
        },
        otherFood: [{
            foodName: {
                type: String
            }
        }]
    },
    smoker: {
        type: Boolean
    },
    allergy: {
        y_n: {
            type: Boolean
        }, //yes or no
        which: [{
            type: String
        }] 
    },
    deficiency: {
        y_n: {
            type: Boolean
        },
        which: [{
            type: String
        }] 
    },
    foodRestriction:{
        y_n: {
            type: Boolean
        },
        which: [{
            type: String
        }] 
    }
});

const TravelPrefData = mongoose.model('TravelPref', TravelPrefSchema);

class TravelPref {
    //Create
    static newPref(data){
		return new Promise((resolve, reject) => {
			TravelPrefData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllPrefs(){
        return new Promise((resolve, reject) => {
            TravelPrefData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updatePref(id, preference) {
        return new Promise((resolve, reject) => {
            TravelPrefData.findByIdAndUpdate(id, preference).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deletePref(id) {
        return new Promise((resolve, reject) => {
            TravelPrefData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }
};

module.exports = TravelPref;

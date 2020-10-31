const Car = require('../../models/Car');

module.exports = {
    create(req, res){
        const car = req.body;

        Car.newCar(car).then((createdCar) => {
            return res.send({createdCar});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Car.getAllCars().then((allCar) =>{
            return res.send({allCar});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const carId = req.params.id;
        const carNewData = req.body;

        Car.updateCar(carId, carNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const carId = req.params.id;

        Car.deleteCar(carId).then(() => {
            return res.send({message:`Usuário ${carId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
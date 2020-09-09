const FlightSchedule = require('../../models/FlightSchedule');

module.exports = {
    create(req, res){
        const flightSchedule = req.body;

        FlightSchedule.newFlightSchedule(flightSchedule).then((createdFlightSchedule) => {
            return res.send({createdFlightSchedule});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        FlightSchedule.getAllFlightSchedules().then((allFlightSchedule) =>{
            return res.send({allFlightSchedule});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const flightScheduleId = req.params.id;
        const flightScheduleNewData = req.body;

        FlightSchedule.updateFlightSchedule(flightScheduleId, flightScheduleNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const flightScheduleId = req.params.id;

        FlightSchedule.deleteFlightSchedule(flightScheduleId).then(() => {
            return res.send({message:`Usuário ${flightScheduleId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
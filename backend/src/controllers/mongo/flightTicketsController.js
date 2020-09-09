const FlightTickets = require('../../models/FlightTickets');

module.exports = {
    create(req, res){
        const flightTickets = req.body;

        FlightTickets.newFlightTickets(flightTickets).then((createdFlightTickets) => {
            return res.send({createdFlightTickets});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        FlightTickets.getAllFlightTicketss().then((allFlightTickets) =>{
            return res.send({allFlightTickets});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const flightTicketsId = req.params.id;
        const flightTicketsNewData = req.body;

        FlightTickets.updateFlightTickets(flightTicketsId, flightTicketsNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const flightTicketsId = req.params.id;

        FlightTickets.deleteFlightTickets(flightTicketsId).then(() => {
            return res.send({message:`Usuário ${flightTicketsId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
const Travel = require('../../models/Travel');

module.exports = {
    create(req, res){
        const travel = req.body;

        Travel.newTravel(travel).then((createdTravel) => {
            return res.send({createdTravel});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Travel.getAllTravels().then((allTravel) =>{
            return res.send({allTravel});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const travelId = req.params.id;
        const travelNewData = req.body;

        Travel.updateTravel(travelId, travelNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const travelId = req.params.id;

        Travel.deleteTravel(travelId).then(() => {
            return res.send({message:`Usuário ${travelId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
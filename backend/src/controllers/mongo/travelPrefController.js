const TravelPref = require('../../models/TravelPref');

module.exports = {
    create(req, res){
        const travelPref = req.body;

        TravelPref.newPref(travelPref).then((createdTravelPref) => {
            return res.send({createdTravelPref});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        TravelPref.getAllPrefs().then((allTravelPref) =>{
            return res.send({allTravelPref});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const travelPrefId = req.params.id;
        const travelPrefNewData = req.body;

        TravelPref.updatePref(travelPrefId, travelPrefNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const travelPrefId = req.params.id;

        TravelPref.deletePref(travelPrefId).then(() => {
            return res.send({message:`Usuário ${travelPrefId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
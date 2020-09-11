const City = require('../../models/City');

module.exports = {
    create(req, res){
        const city = req.body;

        City.newCity(city).then((createdCity) => {
            return res.send({createdCity});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        City.getAllCities().then((allCities) =>{
            return res.send({allCities});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const cityId = req.params.id;
        const cityNewData = req.body;

        City.updateCity(cityId, cityNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const cityId = req.params.id;

        City.deleteCity(cityId).then(() => {
            return res.send({message:`Usuário ${cityId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
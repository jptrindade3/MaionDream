const Intinerary = require('../../models/Intinerary');

module.exports = {
    create(req, res){
        const intinerary = req.body;

        Intinerary.newIntinerary(intinerary).then((createdIntinerary) => {
            return res.send({createdIntinerary});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Intinerary.getAllIntinerarys().then((allIntinerarys) =>{
            return res.send({allIntinerarys});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const intineraryId = req.params.id;
        const intineraryNewData = req.body;

        Intinerary.updateIntinerary(intineraryId, intineraryNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const intineraryId = req.params.id;

        Intinerary.deleteIntinerary(intineraryId).then(() => {
            return res.send({message:`Usuário ${intineraryId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
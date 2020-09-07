const Companion = require('../../models/Companion');

module.exports = {
    create(req, res){
        const companion = req.body;

        Companion.newCompanion(companion).then((createdCompanion) => {
            return res.send({createdCompanion});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Companion.getAllCompanions().then((allCompanions) =>{
            return res.send({allCompanions});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const companionId = req.params.id;
        const companionNewData = req.body;

        Companion.updateCompanion(companionId, companionNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const companionId = req.params.id;

        Companion.deleteCompanion(companionId).then(() => {
            return res.send({message:`Usuário ${companionId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
const Relative = require('../../models/Relative');

module.exports = {
    create(req, res){
        const relative = req.body;

        Relative.newRelative(relative).then((createdRelative) => {
            return res.send({createdRelative});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Relative.getAllRelatives().then((allRelatives) =>{
            return res.send({allRelatives});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const relativeId = req.params.id;
        const relativeNewData = req.body;

        Relative.updateRelative(relativeId, relativeNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const relativeId = req.params.id;

        Relative.deleteRelative(relativeId).then(() => {
            return res.send({message:`Usuário ${relativeId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
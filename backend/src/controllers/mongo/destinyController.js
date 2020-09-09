const Destiny = require('../../models/Destiny');

module.exports = {
    create(req, res){
        const destiny = req.body;

        Destiny.newDestiny(destiny).then((createdDestiny) => {
            return res.send({createdDestiny});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Destiny.getAllDestinys().then((allDestinys) =>{
            return res.send({allDestinys});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const destinyId = req.params.id;
        const destinyNewData = req.body;

        Destiny.updateDestiny(destinyId, destinyNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const destinyId = req.params.id;

        Destiny.deleteDestiny(destinyId).then(() => {
            return res.send({message:`Usuário ${destinyId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
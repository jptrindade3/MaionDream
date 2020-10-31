const Transfer = require('../../models/Transfer');

module.exports = {
    create(req, res){
        const transfer = req.body;

        Transfer.newTransfer(transfer).then((createdTransfer) => {
            return res.send({createdTransfer});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Transfer.getAllTransfers().then((allTransfer) =>{
            return res.send({allTransfer});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const transferId = req.params.id;
        const transferNewData = req.body;

        Transfer.updateTransfer(transferId, transferNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const transferId = req.params.id;

        Transfer.deleteTransfer(transferId).then(() => {
            return res.send({message:`Usuário ${transferId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
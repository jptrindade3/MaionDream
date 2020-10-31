const Service = require('../../models/Service');

module.exports = {
    create(req, res){
        const service = req.body;

        Service.newService(service).then((createdService) => {
            return res.send({createdService});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Service.getAllServices().then((allService) =>{
            return res.send({allService});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const serviceId = req.params.id;
        const serviceNewData = req.body;

        Service.updateService(serviceId, serviceNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const serviceId = req.params.id;

        Service.deleteService(serviceId).then(() => {
            return res.send({message:`Usuário ${serviceId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
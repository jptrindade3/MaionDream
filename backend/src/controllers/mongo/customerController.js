const Customer = require('../../models/Customer');

module.exports = {
    create(req, res){
        const customer = req.body;

        Customer.newCustomer(customer).then((createdCustomer) => {
            return res.send({createdCustomer});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Customer.getAllCustomers().then((allCustomers) =>{
            return res.send({allCustomers});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const customerId = req.params.id;
        const customerNewData = req.body;

        Customer.updateCustomer(customerId, customerNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const customerId = req.params.id;

        Customer.deleteCustomer(customerId).then(() => {
            return res.send({message:`Usuário ${customerId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
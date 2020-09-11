const Hotel = require('../../models/Hotel');

module.exports = {
    create(req, res){
        const hotel = req.body;

        Hotel.newHotel(hotel).then((createdHotel) => {
            return res.send({createdHotel});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Hotel.getAllHotels().then((allHotel) =>{
            return res.send({allHotel});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const hotelId = req.params.id;
        const hotelNewData = req.body;

        Hotel.updateHotel(hotelId, hotelNewData).then(() => {
            return res.send({message: 'Cliente atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const hotelId = req.params.id;

        Hotel.deleteHotel(hotelId).then(() => {
            return res.send({message:`Usuário ${hotelId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
};
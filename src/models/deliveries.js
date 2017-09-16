var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;



module.exports = function (db) {
    var DeliveryModel = new Schema({
        name: { type: String, default: '', match: /^[a-z\d\-_\s]+$/i },
        weight: { type: Number, min: 0 },
        adress: {
            adress: { type: String, default: ''},
            number: {type: Number, min: 0},
            district: {type: String, default: ''},
            complement: {type: String, default: ''},
            city: {type: String, default: ''},
            state: {type: String, default: ''},
            country: {type: String, default: ''},
            geolocation: {
                longitude: {type: Number, min: -180, max: 180},
                latitude: {type: Number, min: -90, max: 90},
            },
        }
    }, {
        collection: 'deliveries'
    })

    return db.model('Delivery', DeliveryModel);
}
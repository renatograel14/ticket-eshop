var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports = function (db) {
    var CustomerModel = new Schema({
        name: { type: String, default: '' },
        data_of_birth: { type: Date, min: 0 },
        contact: {
            phone: { type: String, default: '' },
            address: {
                address: { type: String, default: '' },
                number: { type: String, default: '' },
                complement: { type: String, default: '' },
                city: { type: String, default: '' },
                state: { type: String, default: '' },
                country: { type: String, default: '' },
            }
        },
        cart: {
            show: { type: Schema.Types.ObjectId, ref: "shows" },
            items: [{
                qty: Number,
                ticket: {
                    qty: { type: Number, default: 0 },
                    type: { type: String, default: '' },
                    description: { type: String, default: '' },
                    price: { type: Number, default: 0 }
                }
            }]
        }
    }, {
            usePushEach: true,
            collection: 'customers'
        })

    return db.model('Customer', CustomerModel);
}
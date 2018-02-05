var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;



module.exports = function (db) {
    var ShowModel = new Schema({
        name: { type: String, default: '' },
        artist: { type: String, default: '' },
        description: { type: String, default: '' },
        photo: { data: Buffer, contentType: String },
        gigs: [{
            description: { type: String, default: '' },
            date: {type: Date, default: new Date()},
            tickets: [{
                qty: { type: Number, default: 0 },
                type: { type: String, default: '' },
                description: { type: String, default: '' },
                price: { type: Number, default: 0 }
            }],
            address: {
                address: { type: String, default: ''},
                number: {type: String, default: ''},
                complement: {type: String, default: ''},
                city: {type: String, default: ''},
                state: {type: String, default: ''},
                country: {type: String, default: ''},
                geolocation: {
                    longitude: {type: Number, min: -180, max: 180},
                    latitude: {type: Number, min: -90, max: 90},
                }
            }
        }]
    }, {
        usePushEach: true,
        collection: 'shows'
    });

    ShowModel.index({ name: "text", description: "text", "gigs.address.address": "text" })

    return db.model('Show', ShowModel);
}
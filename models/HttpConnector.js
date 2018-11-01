const mongoose = require('mongoose');
const _ = require('lodash');
const mongoosePaginate = require('mongoose-paginate');
const ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.Promise = Promise;

const httpConnectorSchema = new mongoose.Schema({
    host: { type: String },
    authType: { type: String },
    auth: { type: String },
    name: { type: String },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.plugin(mongoosePaginate);

const HttpConnector = mongoose.model('HttpConnector', httpConnectorSchema);


module.exports = HttpConnector;

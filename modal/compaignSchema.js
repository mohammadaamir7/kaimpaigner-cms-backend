const mongoose = require('mongoose')

const compaignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
        
},{
    timestamps: true
})

const campaign = mongoose.model('campaign', compaignSchema);

module.exports = campaign;
const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    
    Title: { type: String, required: true },
    Text: { type: String},
    Attachement: { type: String },
    content_type: { type: String, required: true },
    //assignedTo: { type: String, required: true },
    campaign_id: { type: String, required: true },
    createdBy: { type: String, required: true },
    contentArray:[
        {type: String}
    ]
}, {
    timestamps: true
})

const message = mongoose.model('message', messageSchema)
module.exports = message
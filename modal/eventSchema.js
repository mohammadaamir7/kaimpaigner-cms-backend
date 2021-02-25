const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    createdBy: {type: String, required: true},
    Event: [{
        Start_Date: { type: Date, required: true },
        End_Date: { type: Date, required: true },
        Event_Date: { type: Date, required: true },
        One_Day_Event: { type: Boolean, required: true },
        Title: { type: String, required: true },
        text: { type: String, required: true },
        //Attachement: { type: String, required: true },
        event_type: { type: String, required: true },
        //assignedTo: { type: String, required: true },
        campaign_id: { type: String, required: true },
        createdBy: { type: String, required: true }
    }],
    
   Digital_Add: [{
        Start_Date: { type: Date },
        End_Date: { type: Date},
        Title: { type: String },
        text: { type: String },
        //Attachement: { type: String, required: true },
        add_on: { type: String },
        One_Day_Event: { type: Boolean, required: true },
        assignedTo: { type: String, required: true },
        campaign_id: { type: String },
        createdBy: { type: String }
    }],

   Field_Operation: [{
        Start_Date: { type: Date },
        End_Date: { type: Date},
        Title: { type: String },
        text: { type: String },
        //Attachement: { type: String, required: true },
        add_on: { type: String },
        One_Day_Event: { type: Boolean, required: true },
        assignedTo: { type: String, required: true },
        campaign_id: { type: String },
        createdBy: { type: String }
    }],

   Media_Ad: [{
        Start_Date: { type: Date },
        End_Date: { type: Date},
        Title: { type: String },
        text: { type: String },
        //Attachement: { type: String, required: true },
        add_on: { type: String },
        One_Day_Event: { type: Boolean, required: true },
        assignedTo: { type: String, required: true },
        campaign_id: { type: String },
        createdBy: { type: String }
    }],

   OOH_Ad: [{
        Start_Date: { type: Date },
        End_Date: { type: Date},
        Title: { type: String },
        text: { type: String },
        //Attachement: { type: String, required: true },
        add_on: { type: String },
        One_Day_Event: { type: Boolean, required: true },
        assignedTo: { type: String, required: true },
        campaign_id: { type: String },
        createdBy: { type: String }
    }],

   Mailbox: [{
        Start_Date: { type: Date },
        End_Date: { type: Date},
        Title: { type: String },
        text: { type: String },
        //Attachement: { type: String, required: true },
        add_on: { type: String },
        One_Day_Event: { type: Boolean, required: true },
        assignedTo: { type: String, required: true },
        campaign_id: { type: String },
        createdBy: { type: String }
    }],

   Research_Planning: [{
        Start_Date: { type: Date },
        End_Date: { type: Date},
        Title: { type: String },
        text: { type: String },
        //Attachement: { type: String, required: true },
        add_on: { type: String },
        One_Day_Event: { type: Boolean, required: true },
        assignedTo: { type: String, required: true },
        campaign_id: { type: String },
        createdBy: { type: String }
    }]
        
}, {
    timestamps: true
})

const event = mongoose.model('event', eventSchema)
module.exports = event
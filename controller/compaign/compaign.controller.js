const { findOne } = require("../../modal/compaignSchema");
const compaignSchema = require("../../modal/compaignSchema");
const eventSchema = require("../../modal/eventSchema");
const messageSchema = require("../../modal/dailyMessageSchema");

module.exports.addCompaign = async (req, res) => {
    try{
        let isExist = await compaignSchema.findOne({name: req.body.name})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newCompaign = new compaignSchema()

            newCompaign.name = req.body.name
            newCompaign.description = req.body.description
            newCompaign.createdBy = req.body.createdBy
            newCompaign.creationDate = Date.parse(req.body.creationDate)
            //newCompaign.Process = [{}]

            await newCompaign.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.updateCompaign = async (req, res) => {
    try{
        compaignSchema.findById(req.params.id)
            .then(compaign => {
                compaign.name = req.body.name,
                compaign.description = req.body.description
                compaign.creationDate = Date.parse(req.body.creationDate)

                compaign.save()
                    .then(() => {
                        return res.json({
                            message: "compaign update successful",
                            success: "success",
                            status: 200,
                        })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign update unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                        })
                    })
            })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.deleteCompaign = async (req, res) => {
    try{
        await compaignSchema.findByIdAndDelete(req.params.id)
        await messageSchema.deleteMany({campaign_id: req.params.id})
        var events = await eventSchema.find()

        events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(child.Event[0].campaign_id === req.params.id){
                    //child.deleteOne({Event : {Title: req.params.title}})
                    
                    child.delete()
                    .then(() => {

                        console.log(req.params.id)
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            
            }

            if(child.Digital_Add[0] !== undefined){
                if(child.Digital_Add[0].campaign_id === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                if(child.Field_Operation[0].campaign_id === req.params.id){
                    child.delete()
                    .then(() => {
                        console.log("child")
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(child.Media_Ad[0].campaign_id === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(child.OOH_Ad[0].campaign_id === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(child.Mailbox[0].campaign_id === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(child.Research_Planning[0].campaign_id === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
        })
            .then(() => {
                return res.json({
                    message: "compaign delete successful",
                    success: "success",
                    status: 200,
                })
            })
            .catch((err) => {
                return res.json({
                    message: "compaign delete unsuccessful",
                    status: 400,
                    error: "error",
                    err,
                })
            })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.listCompaign = async (req, res) => {
  
    try{
        await compaignSchema.find({createdBy: req.params.username})
            .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                return res.json({
                    message: "compaigns retreival unsuccessful",
                    status: 400,
                    error: "error",
                    err,
                })
            })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.findCompaign = async (req, res) => {
    await compaignSchema.findById(req.params.id)
        .then((data) => { return res.json(data) })
        .catch((err) => {
            return res.json({
                message: "compaign retreival unsuccessful",
                status: 400,
                error: "error",
                err,
            })
        }) 
}

module.exports.rangeCompaign = async (req, res) => {
    try{
        await compaignSchema.find( {
            creationDate: {
                $gte: new Date(new Date(req.body.startDate).setHours(00, 00, 00)),
                $lt: new Date(new Date(req.body.endDate).setHours(23, 59, 59))
            }
        }) .then((data) => {
                return res.json(data)
            })
            .catch((err) => {
                return res.json({
                    message: "compaigns retreival unsuccessful",
                    status: 400,
                    error: "error",
                    err,
                })
            })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.addEvent = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            // newEvent.Event.Title = req.body.title
            // newEvent.Event.Text = req.body.text
            // newEvent.Event.event_type = req.body.eventType
            // newEvent.Event.One_Day_Event = req.body.checked
            // newEvent.Event.Start_Date = Date.parse(req.body.startDate)
            // newEvent.Event.End_Date = Date.parse(req.body.endDate)
            // newEvent.Event.Event_Date = Date.parse(req.body.eventDate)
            // newEvent.Event.campaign_id = req.params.id
            // newEvent.Event.createdBy = req.body.createdBy

            newEvent.createdBy = req.body.createdBy

            newEvent.Event = [{
                Title : req.body.title,
                text : req.body.text,
                event_type : req.body.eventType,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                Event_Date : Date.parse(req.body.eventDate),
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]

            newEvent.Digital_Add = []

            newEvent.Field_Operation = []
            
            newEvent.Media_Ad = []

            newEvent.OOH_Ad = []
            
            newEvent.Mailbox = []

            newEvent.Research_Planning = []

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}


module.exports.addDigitalAdd = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            newEvent.createdBy = req.body.createdBy
            
            newEvent.Event = []

            newEvent.Digital_Add = [{
                Title : req.body.title,
                text : req.body.text,
                add_on : req.body.addOn,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                assignedTo: req.body.assignedTo,
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]

            newEvent.Field_Operation = []

            newEvent.Media_Ad = []

            newEvent.OOH_Ad = []
            
            newEvent.Mailbox = []

            newEvent.Research_Planning = []

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.addFieldOperation = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            newEvent.createdBy = req.body.createdBy

            newEvent.Event = []

            newEvent.Digital_Add = []

            newEvent.Field_Operation = [{
                Title : req.body.title,
                text : req.body.text,
                add_on : req.body.addOn,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                assignedTo: req.body.assignedTo,
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]

            newEvent.Media_Ad = []

            newEvent.OOH_Ad = []
            
            newEvent.Mailbox = []

            newEvent.Research_Planning = []

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.addPaidAdvertisement = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            newEvent.createdBy = req.body.createdBy

            newEvent.Event = []

            newEvent.Digital_Add = []

            newEvent.Field_Operation = []

            
            newEvent.Media_Ad = [{
                Title : req.body.title,
                text : req.body.text,
                add_on : req.body.addOn,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                assignedTo: req.body.assignedTo,
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]
            
            newEvent.OOH_Operation = []

            newEvent.Mailbox = []

            newEvent.Research_Planning = []

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.addOOHAdvertisement = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            newEvent.createdBy = req.body.createdBy

            newEvent.Event = []

            newEvent.Digital_Add = []

            newEvent.Field_Operation = []

            
            newEvent.Media_Ad = []
            
            newEvent.OOH_Ad = [{
                Title : req.body.title,
                text : req.body.text,
                add_on : req.body.addOn,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                assignedTo: req.body.assignedTo,
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]

            newEvent.Mailbox = []

            newEvent.Research_Planning = []

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.addMailbox = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            newEvent.createdBy = req.body.createdBy

            newEvent.Event = []

            newEvent.Digital_Add = []

            newEvent.Field_Operation = []

            newEvent.Media_Ad = []
            
            newEvent.OOH_Ad = []

            newEvent.Mailbox = [{
                Title : req.body.title,
                text : req.body.text,
                add_on : req.body.addOn,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                assignedTo: req.body.assignedTo,
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]

            newEvent.Research_Planning = []

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.addResearchPlanning = async (req, res) => {
    try{
        let isExist = await eventSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newEvent = new eventSchema()

            newEvent.createdBy = req.body.createdBy

            newEvent.Event = []

            newEvent.Digital_Add = []

            newEvent.Field_Operation = []

            
            newEvent.Media_Ad = []
            
            newEvent.OOH_Ad = []

            newEvent.Mailbox = []

            newEvent.Research_Planning = [{
                Title : req.body.title,
                text : req.body.text,
                add_on : req.body.addOn,
                One_Day_Event : req.body.checked,
                Start_Date : Date.parse(req.body.startDate),
                End_Date : Date.parse(req.body.endDate),
                assignedTo: req.body.assignedTo,
                campaign_id : req.params.id,
                createdBy : req.body.createdBy
            }]

            await newEvent.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}



module.exports.listEvent = async (req, res) => {
    try{
        var Total_events = await eventSchema.find()
        
        var calarray = []
        var Total_events = this.state.events2
        
        Total_events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(new Date(child.Event[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.Event[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.Event[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.Event[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
                
            }

            if(child.Digital_Add[0] !== undefined){
                if(new Date(child.Digital_Add[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.Digital_Add[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.Digital_Add[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.Digital_Add[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                if(new Date(child.Field_Operation[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.Field_Operation[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.Field_Operation[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.Field_Operation[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(new Date(child.Media_Ad[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.Media_Ad[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.Media_Ad[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.Media_Ad[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(new Date(child.OOH_Ad[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.OOH_Ad[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.OOH_Ad[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.OOH_Ad[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(new Date(child.Mailbox[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.Mailbox[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.Mailbox[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.Mailbox[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(new Date(child.Research_Planning[0].Start_Date).getMonth() >= new Date(req.params.start).getMonth() && new Date(child.Research_Planning[0].End_Date).getMonth() <= new Date(req.params.end).getMonth()){
                    if(new Date(child.Research_Planning[0].Start_Date).getDate() >= new Date(req.params.start).getDate() && new Date(child.Research_Planning[0].End_Date).getDate() <= new Date(req.params.end).getDate()){    
                        calarray.push(child)
                    }
                }
            }
            
        })


        
        return res.json({
            
            calarray
        })

    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.listEventUser = async (req, res) => {
    try{
        await eventSchema.find({
            createdBy: req.params.username         
        })
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json({
                message: "compaigns retreival unsuccessful",
                status: 400,
                error: "error",
                err,
            })
        })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.countProcess = async (req, res) => {
    try{
        var a = [];
        var b = [];
        var c = [];
     c = await eventSchema.find({
        createdBy: req.params.username         
    })
     a = await compaignSchema.find({
        createdBy: req.params.username         
    })
     b = await messageSchema.find({
        createdBy: req.params.username         
    })
    
    return res.json({
        Total_Campaigns : a.length,
        Total_Messages : b.length,
        Total_Process: c.length
    })
        
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}


module.exports.addMessage = async (req, res) => {
    try{
        let isExist = await messageSchema.findOne({title: req.body.title})
        if(isExist){
            return res.json({ message: "compaign already exist", status: 400 });
        } else{
            
            const newMessage = new messageSchema()

            newMessage.Title = req.body.title
            newMessage.Text = req.body.text
            newMessage.content_type = req.body.contentType
            newMessage.campaign_id = req.params.id
            newMessage.createdBy = req.body.createdBy
            newMessage.Attacement = req.body.attachement
            newMessage.contentArray = req.body.contentArray
            newMessage.Start_Date = req.body.startDate
            newMessage.End_Date = req.body.endDate

            await newMessage.save()
                .then(() => {
                    return res.json({
                        message: "compaign add successful",
                        success: "success",
                        data,
                        status: 200,
                      })
                })
                .catch((err) => {
                    return res.json({
                        message: "compaign add unsuccessful",
                        status: 400,
                        error: "error",
                        err,
                      })
                })
        }
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.listMessage = async (req, res) => {
    try{
        await messageSchema.find({
            campaign_id: req.params.id         
        })
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json({
                message: "compaigns retreival unsuccessful",
                status: 400,
                error: "error",
                err,
            })
        })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.deleteMessage = async (req, res) => {
    try{
        await messageSchema.findByIdAndDelete(req.params.id)
            .then(() => {
                return res.json({
                    message: "compaign delete successful",
                    success: "success",
                    status: 200,
                })
            })
            .catch((err) => {
                return res.json({
                    message: "compaign delete unsuccessful",
                    status: 400,
                    error: "error",
                    err,
                })
            })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.findMessage = async (req, res) => {
    await messageSchema.findById(req.params.id)
        .then((data) => { return res.json(data) })
        .catch((err) => {
            return res.json({
                message: "compaign retreival unsuccessful",
                status: 400,
                error: "error",
                err,
            })
        }) 
}

module.exports.updateMessage = async (req, res) => {
    try{
        messageSchema.findById(req.params.id_2)
            .then(newMessage => {

                newMessage.Title = req.body.title
                newMessage.Text = req.body.text
                newMessage.content_type = req.body.contentType
                newMessage.campaign_id = req.params.id_1
                newMessage.createdBy = req.body.createdBy
                newMessage.Attacement = req.body.attachement
                newMessage.contentArray = req.body.contentArray
                newMessage.Start_Date = req.body.startDate
                newMessage.End_Date = req.body.endDate
    
                newMessage.save()
                    .then(() => {
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                          })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                          })
                    })

            })
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.updateProcess = async (req, res) => {
    try{
        var events = await eventSchema.find()

        events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(child.Event[0].Title === req.body.id){
                    child.Event[0].Title = req.body.title
                    child.Event[0].text = req.body.text
                    child.Event[0].Start_Date = Date.parse(req.body.startDate)
                    child.Event[0].End_Date = Date.parse(req.body.endDate)
                    child.Event[0].Event_Date = Date.parse(req.body.endDate)

                    child.save()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            
            }

            if(child.Digital_Add[0] !== undefined){
                if(child.Digital_Add[0].Title === req.body.id){
                    child.Digital_Add[0].Title = req.body.title
                    child.Digital_Add[0].text = req.body.text
                    child.Digital_Add[0].Start_Date = Date.parse(req.body.startDate)
                    child.Digital_Add[0].End_Date = Date.parse(req.body.endDate)
                    
                    child.save()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                console.log(req.body.id)
                if(child.Field_Operation[0].Title === req.body.id){
                    console.log()
                    child.Field_Operation[0].Title = req.body.title
                    child.Field_Operation[0].text = req.body.text
                    child.Field_Operation[0].Start_Date = Date.parse(req.body.startDate)
                    child.Field_Operation[0].End_Date = Date.parse(req.body.endDate)
                    
                    child.save()
                    .then(() => {
                        console.log("child")
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200, 
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(child.Media_Ad[0].Title === req.body.id){
                    child.Media_Ad[0].Title = req.body.title
                    child.Media_Ad[0].text = req.body.text
                    child.Media_Ad[0].Start_Date = Date.parse(req.body.startDate)
                    child.Media_Ad[0].End_Date = Date.parse(req.body.endDate)
                    
                    child.save()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(child.OOH_Ad[0].Title === req.body.id){
                    child.OOH_Ad[0].Title = req.body.title
                    child.OOH_Ad[0].text = req.body.text
                    child.OOH_Ad[0].Start_Date = Date.parse(req.body.startDate)
                    child.OOH_Ad[0].End_Date = Date.parse(req.body.endDate)
                    
                    child.save()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(child.Mailbox[0].Title === req.body.id){
                    child.Mailbox[0].Title = req.body.title
                    child.Mailbox[0].text = req.body.text
                    child.Mailbox[0].Start_Date = Date.parse(req.body.startDate)
                    child.Mailbox[0].End_Date = Date.parse(req.body.endDate)
                    
                    child.save()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(child.Research_Planning[0].Title === req.body.id){
                    child.Research_Planning[0].Title = req.body.title
                    child.Research_Planning[0].text = req.body.text
                    child.Research_Planning[0].Start_Date = Date.parse(req.body.startDate)
                    child.Research_Planning[0].End_Date = Date.parse(req.body.endDate)
                    
                    child.save()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
        })

            
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.findProcess = async (req, res) => {
    try{
        var events = await eventSchema.find()

        events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(child.Event[0].Title === req.params.id){
                    return res.json({
                        process: child.Event[0],
                        process2:{"name" : "Aamir"}
                    })
                }
            
            }

            if(child.Digital_Add[0] !== undefined){
                if(child.Digital_Add[0].Title === req.params.id){
                    return res.json(child.Digital_Add[0])
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                if(child.Field_Operation[0].Title === req.params.id){
                    return res.json(child.Field_Operation[0])
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(child.Media_Ad[0].Title === req.params.id){
                    return res.json(child.Media_Ad[0])
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(child.OOH_Ad[0].Title === req.params.id){
                    return res.json(child.OOH_Ad[0])
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(child.Mailbox[0].Title === req.params.id){
                    return res.json(child.Mailbox[0])
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(child.Research_Planning[0].Title === req.params.id){
                    return res.json(child.Research_Planning[0])
                }
            }
            
        })

            
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.deleteProcess = async (req, res) => {
    try{
        var events = await eventSchema.find()

        events.forEach((child) => {
            if(child.Event[0] !== undefined){
                if(child.Event[0].Title === req.params.id){
                    //child.deleteOne({Event : {Title: req.params.title}})
                    
                    child.delete()
                    .then(() => {

                        console.log(req.params.id)
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            
            }

            if(child.Digital_Add[0] !== undefined){
                if(child.Digital_Add[0].Title === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Field_Operation[0] !== undefined){
                if(child.Field_Operation[0].Title === req.params.id){
                    child.delete()
                    .then(() => {
                        console.log("child")
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Media_Ad[0] !== undefined){
                if(child.Media_Ad[0].Title === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }

            if(child.OOH_Ad[0] !== undefined){
                if(child.OOH_Ad[0].Title === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Mailbox[0] !== undefined){
                if(child.Mailbox[0].Title === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
            if(child.Research_Planning[0] !== undefined){
                if(child.Research_Planning[0].Title === req.params.id){
                    child.delete()
                    .then(() => {
                    
                        return res.json({
                            message: "compaign add successful",
                            success: "success",
                            data,
                            status: 200,
                            })
                    })
                    .catch((err) => {
                        return res.json({
                            message: "compaign add unsuccessful",
                            status: 400,
                            error: "error",
                            err,
                            })
                    })
                }
            }
            
        })

            
    } catch(error){
        return res.json({ message: "server crashed", error });
    }
}

module.exports.ganttChart = async (req, res) => {

    try{

    var f= []
    var data1 = []
    var data2 = []
    var data3 = []
    var data4 = []
    var data5 = []
    var data6 = []
    var data7 = []
    //var data8 = []
    //var data8 = await messageSchema.find({createdBy: req.params.username}) 

    var events = await eventSchema.find({createdBy: req.params.username})

    events.forEach((child) => {
        if(child.Event[0] !== undefined){
                
                data1.push(child.Event[0])
        
        }

        if(child.Digital_Add[0] !== undefined){
            
                data2.push(child.Digital_Add[0])
            
        }
        
        if(child.Field_Operation[0] !== undefined){
            
                data3.push(child.Field_Operation[0])
            
        }
        
        if(child.Media_Ad[0] !== undefined){
            
                data4.push(child.Media_Ad[0])
            
        }

        if(child.OOH_Ad[0] !== undefined){
            
                data5.push(child.OOH_Ad[0])
            
        }
        
        if(child.Mailbox[0] !== undefined){
            
                data6.push(child.Mailbox[0])
            
        }
        
        if(child.Research_Planning[0] !== undefined){
            
                data7.push(child.Research_Planning[0])
            
        }
        
    })

    data1.forEach(element => {
        var c = {
            category: "Event",
            start : element.Start_Date,
            end : element.End_Date,
            color: randomColor(),
            task: element["Title"]
        }
        f.push(c)       
    });

    data2.forEach(element => {

        var c = {
            category: "Digital Add",
            start : element.Start_Date,
            end : element.End_Date,
            color: randomColor(),
            task: element["Title"]
        }
        f.push(c)       
    });

    // data3.forEach(element => {
        
    //     var c = {
    //         category: "Field Operation",
    //         start : element["Start_Date"],
    //         end : element["End_Date"],
    //         color: randomColor(),
    //         task: element["Title"]
    //     }
    //     f.push(c)       
    // });

    // data4.forEach(element => {
        
    //     var c = {
    //         category: "Media Add",
    //         start : element["Start_Date"],
    //         end : element["End_Date"],
    //         color: randomColor(),
    //         task: element["Title"]
    //     }
    //     f.push(c)       
    // });

    // data5.forEach(element => {
        
    //     var c = {
    //         category: "OOH Add",
    //         start : element["Start_Date"],
    //         end : element["End_Date"],
    //         color: randomColor(),
    //         task: element["Title"]
    //     }
    //     f.push(c)       
    // });

    // data6.forEach(element => {
        
    //     var c = {
    //         category: "Mailbox",
    //         start : element["Start_Date"],
    //         end : element["End_Date"],
    //         color: randomColor(),
    //         task: element["Title"]
    //     }
    //     f.push(c)       
    // });

    // data7.forEach(element => {
        
    //     var c = {
    //         category: "Research planning",
    //         start : element["Start_Date"],
    //         end : element["End_Date"],
    //         color: randomColor(),
    //         task: element["Title"]
    //     }
    //     f.push(c)       
    // });

    // data8.forEach(element => {
        
    //     var c = {
    //         category: "Daily Message",
    //         start : element["Start_Date"],
    //         end : element["End_Date"],
    //         color: randomColor(),
    //         task: element["Title"]
    //     }
    //     f.push(c)       
    // });

    
    return res.json(f)

}catch(err){ return res.json({msg: 'app crashed', err: err,})}       



}
const jwt = require('jsonwebtoken')
const { findOne, findById } = require('../../modal/userSchema')

module.exports.auth = async(req, res, next) => {
    const token = localStorage.getItem('authorization')

    if(!token) return res.json({nessage: "Please log in first", status: 400})

    try{
        let user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await findById(user._id)
    }catch(error){
        return res.json({ message: "Invalid Token", error });
    }
    next()
}
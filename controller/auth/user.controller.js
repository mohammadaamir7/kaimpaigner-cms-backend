const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const { loginValidation, registerValidation } = require("../../utils/joi");
const userSchema = require("../../modal/userSchema");
const { findOne, registerUser } = require("../../utils/dbHelper");

// User Registration
module.exports.userRegistration = async (req, res) => {
  try {
    //Data Validation
    const { error } = registerValidation(req.body);
    if (error) return res.json(error.details);

    //Check Duplicate Data
    let emailExist = await findOne(userSchema, { email: req.body.email });
    if (emailExist) {
      return res.json({ message: "email already exist", status: 400 });
    } else {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      };
      let newUser = registerUser(userSchema, userData);
      newUser
        .then((data) => {
          return res.json({
            message: "user add successful",
            success: "success",
            data,
            status: 200,
          });
        })
        .catch((err) => {
          return res.json({
            message: "user add unsuccessful",
            status: 400,
            error: "error",
            err,
          });
        });
    }
  } catch (error) {
    return res.json({ message: "server crashed", error });
  }
};

// User Login
module.exports.userLogin = async (req, res) => {
  try {
    //Data Validation
    const { error } = loginValidation(req.body);
    if (error) return res.json(error.details);

    //Check User Exist
    let userExist = await findOne(userSchema, { email: req.body.email });
    if (userExist) {
      bcrypt.compare(req.body.password, userExist.password).then((result) => {
        if (result) {

          const token = jwt.sign({id: userExist._id, name: userExist.name, email: userExist.email}, '!L?5=Cex}W6cb%}hP[KE&+~nUV^=M-F"PRCw,s3J;uJ(_)KE>c')
          
          return res.json({
            token,
            user: {
              id: userExist._id,
              name: userExist.name
            }
          });
        } else {
          return res.json({ message: "password not verify", status: 404 });
        }
      });
    } else {
      return res.json({ message: "user not exist", status: 404 });
    }
  } catch (error) {
    return res.json({ message: "server crashed", error });
  }
};

// Forgot Password
module.exports.forgotPassword = async (req, res, next) => {
 try{
    const user = await userSchema.findOne({ email: req.body.email })
    if(user){
      req.user = user
      console.log(user)
      
    }
    
    console.log(user)
 }catch(error){
  return res.json({ message: "server crashed", error });
 }
 next()
 
  
}
// Password Update
module.exports.updatePassword = async (req, res) => {
  console.log("Req user"+req.user)
  try{
    let user = await userSchema.findOne({ email: req.body.email })
    if(user){
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      
        user.password = hashPassword
      

      await user.save()
        .then((data) => {
          return res.json({
              message: "password update successful",
              success: "success",
              data,
              status: 200,
            })
      })
      .catch((err) => {
          return res.json({
              message: "password update unsuccessful",
              status: 400,
              error: "error",
              err,
            })
      })
    }else{
      return res.json({ message: "Cannot complete update operation", status: 400 });
    }

  }catch(error){
    return res.json({ message: "server crashed", error });
  }
}

module.exports.listUsers = async (req, res) => {
  
  try{
      await userSchema.find()
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


module.exports.IsValidToken = async(req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) return res.json(false);

    const userExist = await userSchema.findOne(req.user._id);
    if (!userExist) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports.LoggedUser = async(req, res) => {
  const user = await userSchema.findOne(req.user._id);
  return res.json({
    name: user.name,
    id: user._id,
  });
}
const joi = require("joi");

//=============================
//       AUTH Validation
//=============================

// User register validation
module.exports.registerValidation = (data) => {
  const userSchema = joi.object({
    name: joi.string().required().error(new Error("user name is required")),
    email: joi
      .string()
      .required()
      .email()
      .error(new Error("user mail is required")),
    password: joi
      .string()
      .required()
      .error(new Error("user password is required")),
  });

  return userSchema.validate(data);
};

// User login validation
module.exports.loginValidation = (data) => {
  const userSchema = joi.object({
    email: joi
      .string()
      .required()
      .email()
      .error(new Error("user mail is required")),
    password: joi
      .string()
      .required()
      .trim()
      .error(new Error("user password is required")),
  });

  return userSchema.validate(data);
};


//=============================
//    Daily task Validation
//=============================
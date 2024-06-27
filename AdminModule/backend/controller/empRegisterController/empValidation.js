const joi = require('joi')

const schema = joi.object({
    emp_id: joi.string().min(1).max(5).required(),
    emp_name: joi.string().min(1).max(20).required(),
    email: joi.string().min(1).max(20).required(),
    password: joi.string().min(1).max(12).required(),
    img: joi.string(),
    role_name: joi.string()
})

const Validation = (req,res,next)=>{
    const value = schema.validate(req.body)
    if(value.error){
        res.send({error: value.error.details[0]})
    }
    else{
        next()
    }
}

module.exports = Validation
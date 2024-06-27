const joi = require('joi')

const schema = joi.object({
    room_id: joi.string().min(1).max(5).required(),
    room_name: joi.string().min(1).max(20).required(),
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
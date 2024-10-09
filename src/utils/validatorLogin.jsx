import Joi from "joi";

const loginSchema = Joi.object({
    email : Joi
    .string()
    .required()
    .trim()
    .email({tlds:false})
    .messages({
        "string.empty" : "Email is required!!"
    }),
    password : Joi
    .string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}/)
    .messages({
        "string.empty" : "Password is required!!",
        "string.pattern.base": "Password must contain a-z A-Z 0-9 and must be at least 6 characters"
    })
})


const validateLogin = (input) => {
    const { error } = loginSchema.validate(input,{
        abortEarly : false
    })

    // console.log(error.details)
    if (error) {
        const formatError = error.details.reduce((prev,curr)=>{
            // console.log("path",curr.path)
            // console.log("message",curr.message)

            prev[curr.path[0]] = curr.message
            return prev
        },{})

        return formatError
    }
    return null
}

export default validateLogin
const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")
const {uid} = require("uid")

module.exports = {
    register: async (req, res) => {
        const {email, passOne: password, photo} = req.body

        new userSchema({
            email,
            password,
            secret: uid(),
            photo
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    },
    login: async (req, res) => {
        const {email, password} = req.body
        console.log(email, password)

        const userExists = await userSchema.findOne({email, password})

        if(userExists) {
            return sendRes(res, false, "all good", {secret: userExists.secret})
        }

        return sendRes(res, true, "bad credentials", null)
    },
    getPhoto: async (req, res) => {
        const {secret} = req.params

        const user = await userSchema.findOne({secret})

        return sendRes(res, false, "all good", {photo: user.photo})
    }
}



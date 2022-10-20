const userSchema = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const { uid } = require('uid')
const link = 'https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE='

module.exports = { 
    register: async (req, res) => {
        const {email, password} = req.body

        async function newUser() {
                const user = new userSchema({
                    email: email,
                    password: await bcrypt.hash(password, 10),
                    secret: uid(),
                    photo: link,
                })
                console.log(user)
                const member = await user.save()
       }
        res.send({OK:'ok'})
        newUser()
    },
    login: async (req, res) => {
        const {email,password} = req.body
        const user = await userSchema.findOne({email:`${email}`})
        if(user){
            const compare = await bcrypt.compare(password, user.password)
            console.log(compare)
            res.send({user})
        } else {
            return res.send({error: 'user not found'})
        }
    },
    photo: async(req,res) => {
        const {id} = req.body
        const photoURL = await userSchema.find({_id: id})       
        res.send(photoURL)
    },
    update: async(req, res) => {
        const {email, photo, id} = req.body
        const update = await userSchema.findOneAndUpdate(
            {_id: id},
            {$set: {email: email, photo: photo}},
            {new : true}
        )
        res.send({OK:'ok', update})

    }
}


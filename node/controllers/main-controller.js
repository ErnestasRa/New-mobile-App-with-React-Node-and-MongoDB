const userSchema = require('../schemas/userSchema')
const postSchema = require('../schemas/postSchema')
const bcrypt = require('bcrypt')
const { uid } = require('uid')
const sendRes = require("../modules/universal-res")
const link = 'https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE='

module.exports = { 
    register: async (req, res) => {
        const {email, password} = req.body

        const hash = await bcrypt.hash(password, 10)

        async function newUser() {
                const user = new userSchema({
                    email: email,
                    password: hash,
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
        const user = await userSchema.findOne({email})
        if(user){
            const compare = await bcrypt.compare(password, user.password)
            
            if(compare) return sendRes(res, false, 'all good', {secret: user.secret})

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

    },
    userinfo: async(req, res) => {
        const {id} = req.body
        const userData = await userSchema.find({secret: id})
        res.send(userData)
    },
    imageurl: async(req, res) => {
        const {url, id} = req.body
        const update = await userSchema.findOneAndUpdate(
            {secret: id},
            {$set: {photo: url}},
            {new: true}
        )
        res.send({OK:'ok', update})
    },
    createpost: async(req, res) => {
        const {title, photo, id} = req.body
        
        async function newPost() {
            const post = new postSchema({
                title: title,
                photo: photo,
                id: uid(),
            })
            const data = await post.save()
   }
        res.send({OK: 'ok'})
        newPost()
    },
    getposts: async(req, res) => {
        const allposts = await postSchema.find({})
        res.send(allposts)
    },
    getsinglepost: async(req, res) => {
        const {id} = req.params
        const singlePost = await postSchema.find({id: id})
        console.log(id)
        res.send(singlePost)
    }
}


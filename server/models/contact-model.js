const mongoose=require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        required: true,
        type:String,
    },
    email: {
        required: true,
        type:String,
    },
    feedback:{
        required:true,
        type:String,
    },
})

const Feedback = mongoose.model('Feedback', contactSchema);

module.exports = Feedback;
const {Schema,model}=require('mongoose')

const faq=new Schema({
    name:String,
    question:String,
    answer:String,
    data:Date,
    status:Number
})

module.exports=model('Faq',faq)
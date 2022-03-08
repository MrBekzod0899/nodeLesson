const { Route } = require('express')
const {Router}=require('express')
const Faq=require('../model/faq')

const router=Router()


router.get('/question',async (req,res)=>{
    let faq=await Faq.find().lean()
    res.render('page/faq',{
        isFaqs:true,
        faq
    })
})

router.get('/question/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Faq.findByIdAndRemove({_id});
    res.redirect('/question')
    console.log(_id)
})

router.post('/question',async(req,res)=>{
    let {name,question}=req.body
    console.log(name,question)
    let faq={
        name,question,
        data:Date.now(),
        status:0
    }
    
    let newFaq=await new Faq(faq)
    await newFaq.save();
    res.redirect('/question')
    console.log(newFaq)
})

module.exports=router
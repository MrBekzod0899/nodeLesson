const {Router}=require('express')

const router=Router();

router.get('/',(req,res)=>{
    let randNum=Math.floor(Math.random()*100+1)
    res.render('index',{
        isHome:true
    })
})

router.get('/contact',(req,res)=>{
    res.render('page/contact',{
        isContact:true
    })
})

module.exports=router
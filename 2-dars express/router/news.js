const {Router}=require('express')



const router=Router()

router.get('/news',(req,res)=>{
    res.render('page/news',{
        isNews:true
    })
})

router.get('/news/create',(req,res)=>{
    res.render('page/createnews',{
        isNews:true
    })
})

module.exports=router
const {Router}=require('express')
const router =Router()

router.get('/projects',(req,res)=>{
  res.render('page/projects',{
      isProjects:true
  })
})

module.exports=router
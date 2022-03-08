const express=require('express')
const app=express()
const mongoose=require('mongoose')
const expHbs=require('express-handlebars')
app.use(express.urlencoded({extended:true}))
const hbs=expHbs.create({
        defaultLayout:'main',
        extname:'hbs'
})

app.engine('hbs',hbs.engine),
app.set('view engine','hbs')
app.set('views','temp')
app.use(express.static('public'))


//routerlar

const pageRouter=require('./router/page')
const newsRouter=require('./router/news')
const faqRouter=require('./router/faq')
const projectsRouter=require('./router/projects')


app.use(pageRouter)
app.use(newsRouter)
app.use(faqRouter)
app.use(projectsRouter)

const PORT=3003
 async function dev(){
    try{
      await  mongoose.connect('mongodb://127.0.0.1:27017/portal',{
            useNewUrlParser:true
        })
        app.listen(PORT,()=>{
            console.log( `Server is running on ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

dev()































// app.get('/',(req,res)=>{
//     res.write( `
//     <h1>Salom Dunyo</h1> 
//         <form action='/' method="post">
//         <input type="text" name="firstname" placeholder="firstname"/> <br/>
//         <input type="text" name="lastname" placeholder="lastname"/> <br/>
//         <input type="number" name="age" placeholder="age"/> <br/>
//         <button type="submit">Send</button>
//     </form>
//     `)
//     res.end() 
// })

// app.post('/',(req,res)=>{
//     let {firstname,lastname,age}=req.body
//     res.write(`
//         <h1>Message sent!!! your massage is :</h1>
//         <p><b>FirstName</b>:<span>${firstname}</span></p>
//         <p><b>LastName</b>:<span>${lastname}</span></p>
//         <p><b>age</b>:<span>${age}</span></p>
//     `)
//     res.end()
// })

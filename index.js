const express =require ('express')
const app =express()
const PORT= 5001
const router =require('./routing')
app.use(express.static('public'))
app.use(router)

/* router.use((req,res) => {
    res.status(404)
    sendFile('./views/404.html' , {root: __dirname})
    
}) */
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))
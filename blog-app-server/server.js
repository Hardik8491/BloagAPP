require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
console.log(process.env.DB_CLUSTER)
const start = async()=>{
    try{
        console.log("Connecting with database...")
        await mongoose.connect(process.env.DB_CLUSTER).catch((e)=>{
            console.error("🔴 Failed connecting to Cluster: ",e.message)
        })
       
        mongoose.connection.on('connected',()=>{
            console.log("Database Cluster Connected...")
        })
        const PORT=process.env.PORT;
        app.listen( PORT || 3000,()=>{
            console.log(`Server is listening on ${PORT}... `)
        })
        
    }catch(e){
        console.error("Error Connecting to Database ",e.message)
    }
    
}

start()
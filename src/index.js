const express=require('express');
const { PORT, LogerConfig } = require('./config');
const {ServerConfig}=require('./config')

const app=express();
const apiRoutes=require('./routes')

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(` successfully started server on ${ServerConfig.PORT}`)
    LogerConfig.info("successfully started the server",{})
})
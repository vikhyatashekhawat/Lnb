const mongoose = require('mongoose')
const url='vikhyatashekhawat@ac-jntf0bb-shard-00-00.gywhrk3.mongodb.net:27017,ac-jntf0bb-shard-00-01.gywhrk3.mongodb.net:27017,ac-jntf0bb-shard-00-02.gywhrk3.mongodb.net:27017/admin?ssl=true&retryWrites=true&replicaSet=atlas-uch0ox-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1'
mongoose.connect(url, {useNewUrlParser : true})
const db = mongoose.connection;




db.on('error', function(){
    console.log("Something Went Wrong during connection")
})

db.once('open', function(){
    console.log("Successfully connected with MongoDb")
})


module.exports = db;




const mongoose = require("mongoose");

const connectToDB = async =>{
    mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`connected DB:`)
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectToDB;
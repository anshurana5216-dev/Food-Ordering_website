const connectDB = require("./confi/db");
const Food = require("./models/Food");
const foods = require("./data/foodData");



require("dotenv").config();

// console.log(process.env.MONGO_URI);


const importData = async()=>{

    try{

        await connectDB();

        await Food.deleteMany();

        await Food.insertMany(foods);

        console.log("Food Data Imported");

        process.exit();

    }
    catch(error){

        console.log(error);
        process.exit(1);

    }

}


importData();
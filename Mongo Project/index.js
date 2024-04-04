const mongoose=require('mongoose');
const student_model = require('./module/student_model');

// code to connect db

mongoose.connect("mongodb://localhost:27017")

const db=mongoose.connection

db.on("error", ()=>{
    console.log("error")
});

db.once("open", ()=>{
    console.log("connected")
    // logic to insert data in db
    init();

    // running the queries on MongoDB
    dbQueries();
});

async function init()
{
    const student={
        name:"Himanshu",
        age:21,
        email:'abcd@gmail.com'
    }

   const std_obj = await student_model.create(student);
   console.log(std_obj)
}

async function dbQueries()
{
    // read the data
    console.log("Inside dbQuery Function");
    // read the student data on the basis of id
    try{
        const data=await student_model.findById('65d0c500f94b9a6bf54b6154')
        console.log(data);
    }
    catch(err){
        console.log(err);
    }

    // dealing with multiple conditions
    const stu=await student_model.where("age").gt(18);
    console.log(stu);

    //deleting
    const del=await student_model.deleteOne({name:'Himanshu'});
    console.log(del);
}

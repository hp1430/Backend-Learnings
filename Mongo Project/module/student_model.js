// Define schema of students collection

const mongoose=require('mongoose')

//schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: {
        type:Number,
        min:18
    },
    email :{
        type:String,
        required:true,
        lowercase:true,
        minLen:15
    },
    subjects:[String],
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    }
})

//create corresponding collection in DB

module.exports = mongoose.model("student", studentSchema)
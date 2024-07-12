const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://eshalal9693:esha2127E@cluster0.3mrzxzx.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo
}
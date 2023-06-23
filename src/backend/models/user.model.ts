import { Schema,models,model } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email:{type:String,unique:true,require:true},
    password:{type:String,minLength:}
},{
    timestamps:true
})

export default models.User || model('User',userSchema)

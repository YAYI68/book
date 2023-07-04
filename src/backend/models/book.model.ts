import { Schema,models,model} from "mongoose";


const bookSchema = new Schema({
    author: { 
        type: String,
        require:true 
       },
    name: { 
        type: String,
        require:true 
    },
    note:{
       type:String,
       require:true
    },
    image:{
        type:String,
    },
    genre:{
        type: mongoose.Types.ObjectId, ref: "Genre"
    },
    edition:{
      type:Number,
    }
},
{
    timestamps:true
})

export default models.Book || model('Book',bookSchema)


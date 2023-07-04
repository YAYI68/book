import { Schema,models,model} from "mongoose";


const bookSchema = new Schema({
    name: { 
        type: String,
        require:true 
    },
},
{
    timestamps:true
})

export default models.Genre || model('Genre',bookSchema)


import { Schema,models,model} from "mongoose";

const userSchema = new Schema({
    firstname: { 
        type: String,
        require:true 
       },
    lastname: { 
        type: String,
        require:true 
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{type:String,
          minLength:8,
        select:false
    },
    gender:{
       type:String,
       enum:["Male","Female"],
    },
    pricing_plan:{
      type:String,
      enum:["Free","Starter","Professional"],
      default:"Free"  
    }
    ,
    is_active:{
        type:Boolean,
        default:false
    },
    is_Admin:{
        type:Boolean,
        default:false
    }

},
{
    virtuals:{
        fullname:{
            get(){
                return this.firstname + " " + this.lastname
            }
        },
        id:{
            get(){
                return this._id
            }
        }
    },
    timestamps:true
})

export default models.User || model('User',userSchema)

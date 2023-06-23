import mongoose from "mongoose";

// const dbConnect = async()=>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log('Database connection is on')
//     }
//     catch(e){
//        console.log(`Database connection fail due to ${e}`)
//        console.log(e)
//     }
 
// }
// export default dbConnect

// const connectMongoDb = async ()=>{
//     try{
//         const { connection } = await mongoose.connect(process.env.MONGODB_URL)
//         if(connection.readyState == 1){
//             console.log("Database Connected")
//         }
//     }
//     catch(errors){
//         console.log(errors)
//     }
// }
// export default connectMongoDb



const MONGODB_URL :any  = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

declare global {
    var mongoose:any
}

// This prevents multiple connections to the database IN DEV due to HMR
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectToDb() {
  if (cached.conn) {
    console.log("Using cached connection...");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      console.log("Using fresh connection...");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
}

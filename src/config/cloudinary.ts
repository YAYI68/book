import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_SECURE } from './env';

export const cloudinaryConfig =  cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET,
    secure: CLOUDINARY_SECURE
  });

// export const uploadImage = async (image:any)=>{
//     try{
//         cloudinary.uploader.upload(image,)
//     }
//     catch(err){
//         console.log({err})
//     }
// }
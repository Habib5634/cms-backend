const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstName:String,
   lastName:String,
   email:String,
   password:String,
   course:String,
   section:String,
   phone:Number,
   cnic:Number,
   fatherName:String,
   fatherCnic:Number,
   fatherPhone:Number,
   emergencyPhone:Number,
   role:String,
   isPasswordHidden:Boolean,
   dateOfBirth:String,
   Age:Number,
   qualificaton:String,
   otherQualification:[],
   courseAllowed:Number,

   
}, {
    timestamps: true,
}, );

export default mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstName:String,
   lastName:String,
   email:String,
   password:String,
   course:[],
   section:String,
   phone:Number,
   cnic:Number,
   fatherName:String,
   fatherCnic:Number,
   fatherPhone:Number,
   emergencyPhone:Number,
   role:String,
   dateOfBirth:String,
   age:Number,
   qualification:String,
   otherQualifications:[],
   courseAllowed:Number,
   enrolledCourses:[],

   
}, {
    timestamps: true,
}, );

export default mongoose.model('User', userSchema);
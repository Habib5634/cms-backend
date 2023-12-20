import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    courseName: String,
    courseDuration: Number,
    isFormOpen: Boolean,
    noOfQuiz:Number,
    feeInRupees:Number,
    leadTrainerId:String,
    assistantTrainers:String,
   

    
    
}, {
    timestamps: true,
}, );

export default mongoose.model('Courses', CourseSchema);
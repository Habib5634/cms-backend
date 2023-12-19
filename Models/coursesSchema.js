import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    courseName: [],
    courseDuration: Number,
    isFormOpen: Boolean,
    noOfQuiz:Number,
    feeInRupees:Number,
    leadTrainerId:[],
    assistantTrainers:[],
   

    
    
}, {
    timestamps: true,
}, );

export default mongoose.model('Courses', CourseSchema);
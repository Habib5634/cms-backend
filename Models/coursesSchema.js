import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    courseName: [],
    courseDuration: Number,
    
    
}, {
    timestamps: true,
}, );

export default mongoose.model('Courses', CourseSchema);
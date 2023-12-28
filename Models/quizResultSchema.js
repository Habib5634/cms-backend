import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
    quizSubmitted:Boolean,
    studentName:
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'studentName',
            },

            courseId:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'courseName',
            },
            totalMarks:Number,
            grade:String,
            result:Boolean,
    

   


}, {
    timestamps: true,
},);

export default mongoose.model('quizResult', quizResultSchema);
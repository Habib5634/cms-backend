import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
    totalNumbers:Number,
    quizSubmitted:Boolean,
    studentName:
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'studentName',
            },

            courseName:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'courseName',
            },
            totalMarks:Number,
            grade:String,
            result:Boolean,
    

   
    user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },

}, {
    timestamps: true,
},);

export default mongoose.model('quizResult', quizResultSchema);
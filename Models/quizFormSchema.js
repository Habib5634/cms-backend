import mongoose from 'mongoose';

const quizFormSchema = new mongoose.Schema({
    
    questions:
        [{
            correctAnswer: String,
            options: [],
            totalMarks: Number, 
            question:String
        }],
        duration: Number,
    courses:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'courses',
        },
        status:Boolean,

}, {
    timestamps: true,
},);

export default mongoose.model('quizForm', quizFormSchema);
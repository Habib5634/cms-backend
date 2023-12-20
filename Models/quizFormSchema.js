import mongoose from 'mongoose';

const quizFormSchema = new mongoose.Schema({
    
    questions:
        [{
            correctAnswer: String,
            duration: Number,
            options: [],
            totalMarks: Number, 
            question:String
        }],
    courses:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'courses',
        },

}, {
    timestamps: true,
},);

export default mongoose.model('quizForm', quizFormSchema);
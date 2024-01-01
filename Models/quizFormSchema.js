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
<<<<<<< HEAD
    quizStatus:Boolean,
=======
        status:Boolean,
>>>>>>> a9d1fb7acc3bd7ae510667c998faed766899cfb6

}, {
    timestamps: true,
},);

export default mongoose.model('quizForm', quizFormSchema);
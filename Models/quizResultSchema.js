import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
    totalNumbers:Number,
    quizSubmitted:Boolean,
    

   
    user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },

}, {
    timestamps: true,
},);

export default mongoose.model('quizResult', quizResultSchema);
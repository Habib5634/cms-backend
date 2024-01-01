import mongoose from 'mongoose';

const pushNotificationSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    read: {
        type: Boolean,
        default: false,
    },
    notifyToAdmin: {
        type: Boolean,
        default: false,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courseId'
    },
    status:Boolean,
}, {
    timestamps: true,
});

export default mongoose.model('Notifications', pushNotificationSchema);

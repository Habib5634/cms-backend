/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import status from 'http-status';
import Pusher from 'pusher';
import CourseSchema from '../Models/courseSchema';
import InstructorSchema from '../Models/instructorRequest';
import User from '../Models/userSchema';
import NotifySchema from '../Models/notificationSchema';

// const getContent = (req, res) => {
//     const { Sid } = req.params;
//     EventSchema.find({ CourseId: Sid })
//         .then(events => {
//             res.status(status.OK).send(events);
//         })
//         .catch(err => {
//             res.status(status.INTERNAL_SERVER_ERROR).send({
//                 Message: 'No Events!',
//                 err,
//             });
//         });
// };










// const deleteContent = (req, res) => {
//     const { id } = req.params;
//     EventSchema.findByIdAndRemove(id, (err, result) => {
//         if (result) {
//             res.status(status.OK).send({
//                 Message: 'Event Deleted Successfully.',
//             });
//         } else {
//             res.status(status.INTERNAL_SERVER_ERROR).send({
//                 Message: 'Unable to Delete.',
//                 err,
//             });
//         }
//     });
// };

// const editContent = (req, res) => {
//     const { id } = req.params;
//     const query = { $set: req.body };
//     EventSchema.findByIdAndUpdate(id, query, { new: true }, (err, result) => {
//         if (err) {
//             res.status(status.INTERNAL_SERVER_ERROR).send({
//                 Message: 'Unable to Update.',
//             });
//         } else {
//             res.status(status.OK).send({
//                 Message: 'Successfully Updated.',
//                 result,
//             });
//         }
//     });
// };

const getSingleCourseStudent = async(req, res) => {
    const { eid } = req.params;

    const enrollments = EnrollmentSchema.findOne({ studentId: eid });
    const courses = await CourseSchema.find({
            enrolledStudents: { $in: enrollments },
        }).populate({
            path: 'enrolledStudents',
            match: { studentId: eid },
            select: '-_id -courseId',
        })
        .then(async event => {

            if (!event) {
                return res.status(status.NOT_FOUND).send({
                    Message: ' not found',
                });
            }
            return res.status(status.OK).send(event);
        })
        .catch(err => {
            return res.status(status.INTERNAL_SERVER_ERROR).send({
                Message: 'Internal Server Error',
                err,
            });
        });
};

const getAllNotifications = (req, res) => {

    // eslint-disable-next-line no-underscore-dangle

    // eslint-disable-next-line no-underscore-dangle
    NotifySchema.find().sort({ 'createdAt': -1 }).limit(10)
        .then(events => {
            res.status(status.OK).send(events);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).send({
                Message: 'No shipments!',
                err,
            });
        });
};


const RequestAccept = (req, res) => {
    const { id } = req.params;
    const query = { $set: req.body };
    NotifySchema.findByIdAndUpdate(id, query, { new: true }, (err, result) => {
        if (err) {
            res.status(status.INTERNAL_SERVER_ERROR).send({
                Message: 'Unable to Update.',
            });
        } else {
            res.status(status.OK).send({
                Message: 'Successfully Updated.',
                result,
            });
        }
    });
};


export default { getSingleCourseStudent, getAllNotifications, RequestAccept };
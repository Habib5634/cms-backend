import status from 'http-status';
import userSignin from './userSignin';


// const addCourse = (req, res) => {
//     const { courseName, maxCapacity, instructorId } = req.body;

//     const event = new EventSchema({

//         courseName,
//         maxCapacity,
//         // eslint-disable-next-line no-underscore-dangle
//         instructorId

//     });
//     event
//         .save()
//         .then(savedEvent => {
//             res.status(status.OK).send({
//                 savedEvent,
//                 Message: 'Event Created Successfully',
//                 type: status.OK,
//             });
//         })
//         .catch(err => {
//             res.status(status.INTERNAL_SERVER_ERROR).send({
//                 Message: status.INTERNAL_SERVER_ERROR,
//                 err,
//             });
//         });
// };

const getallusers = (req, res) => {
    userSignin.find()
        .then(events => {
            res.status(status.OK).send(events);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).send({
                Message: 'No Events!',
                err,
            });
        });
};






export default{getallusers};
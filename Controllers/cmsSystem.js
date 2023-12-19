import status from 'http-status';
import userSignin from './userSignin';
import userSchema from '../Models/userSchema';


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
    userSchema.find()
      .then(users => {
        if (users.length === 0) {
          return res.status(404).json({ message: 'No users found' });
        }
  
        res.status(200).json(users);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  };





export default{getallusers};
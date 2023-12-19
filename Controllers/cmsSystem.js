import status from 'http-status';
import userSchema from '../Models/userSchema';
import coursesSchema from '../Models/coursesSchema';


const addCourses = (req, res) => {
    const { courseName, courseDuration, isFormOpen, noOfQuiz, feeInRupees, leadTrainerId, assistantTrainer } = req.body;

    const courses = new coursesSchema({

       courseName,
       courseDuration,
       isFormOpen,
       noOfQuiz,
       feeInRupees,
       leadTrainerId,
       assistantTrainer,

    });
    courses
        .save()
        .then(savedcourses => {
            res.status(status.OK).send({
                savedcourses,
                Message: 'Event Created Successfully',
                type: status.OK,
            });
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).send({
                Message: status.INTERNAL_SERVER_ERROR,
                err,
            });
        });
};

const getallusers = (req, res) => {
    userSchema.find()
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






export default{getallusers,
addCourses,};
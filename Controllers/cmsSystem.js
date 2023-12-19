import status from 'http-status';
<<<<<<< HEAD
import userSchema from '../Models/userSchema';
import coursesSchema from '../Models/coursesSchema';
=======
import userSignin from './userSignin';
import userSchema from '../Models/userSchema';
>>>>>>> 729ed6c88f0342cdacbb4b065bac905cac8cefe1


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
<<<<<<< HEAD
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

=======
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
>>>>>>> 729ed6c88f0342cdacbb4b065bac905cac8cefe1





export default{getallusers,
addCourses,};
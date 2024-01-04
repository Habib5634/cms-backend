import status from 'http-status';
import Pusher from 'pusher';
import userSchema from '../Models/userSchema';
import coursesSchema from '../Models/coursesSchema';
import quizFormSchema from '../Models/quizFormSchema';
import quizResultSchema from '../Models/quizResultSchema';
import user from '../validations/user';
import notificationSchema from '../Models/notificationSchema';
import notificationforuserSchema from '../Models/notificationforuserSchema';

require('dotenv').config();
const addCourses = (req, res) => {
  const { courseName, courseDuration, isFormOpen, noOfQuiz, feeInRupees, leadTrainerId, assistantTrainers } = req.body;

  const courses = new coursesSchema({

    courseName,
    courseDuration,
    isFormOpen,
    noOfQuiz,
    feeInRupees,
    leadTrainerId,
    assistantTrainers,

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
      return; // Add this line to exit the function
      
    });
};






const getallcourses = (req, res) => {
  coursesSchema.find()
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







const getOnecourse = (req, res) => {
  const { id } = req.params; // Assuming the city is passed as a parameter

  coursesSchema.findOne({ _id: id })
    .then(course => {
      if (course) {
        res.status(status.OK).send(course);
      } else {
        res.status(status.NOT_FOUND).send({
          Message: 'product not found.',
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'Internal server error',
        Error: err,
      });
    });
};



const patchcourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    // Find the city by its ID
    let course = await coursesSchema.findById(courseId);

    if (!course) {
      // Return a 404 response with a message indicating that the city was not found
      return res.status(404).json({ success: false, message: 'City not found' });
    }

    // Update the existing city's settings with the provided data
    course.set(req.body);
    await course.save();

    res.status(200).json({ success: true, message: 'City settings updated', data: course });
  } catch (error) {
    console.error('Error updating city settings:', error);
    res.status(500).json({ success: false, message: 'Failed to update city settings' });
  }
};




const getOneuser = (req, res) => {
  const { id } = req.params; // Assuming the city is passed as a parameter

  userSchema.findOne({ _id: id })
    .then(user => {
      if (user) {
        res.status(status.OK).send(user);
      } else {
        res.status(status.NOT_FOUND).send({
          Message: 'product not found.',
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'Internal server error',
        Error: err,
      });
    });
};





const addQuizForm = (req, res) => {
  const { questions, courses, duration,quizStatus  } = req.body;

  const quizForm = new quizFormSchema({

    questions,
    courses,
    duration,
    quizStatus

  });
  quizForm
    .save()
    .then(savedQuizForm => {
      res.status(status.OK).send({
        savedQuizForm,
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




const getallQuizForm = (req, res) => {
  quizFormSchema.find()
    .then(quizForm => {
      res.status(status.OK).send(quizForm);
    })
    .catch(err => {
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'No Events!',
        err,
      });
    });
};




const getOneQuizForm = (req, res) => {
  const { id } = req.params; // Assuming the city is passed as a parameter

  quizFormSchema.findOne({ _id: id })
    .then(quizForm => {
      if (quizForm) {
        res.status(status.OK).send(quizForm);
      } else {
        res.status(status.NOT_FOUND).send({
          Message: 'product not found.',
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'Internal server error',
        Error: err,
      });
    });
};





const addQuizResult = (req, res) => {
  const { quizSubmitted, studentName, courseId, totalMarks, grade, result,  } = req.body;

  const quizResult = new quizResultSchema({

    quizSubmitted,
   studentName,
   courseId,
   totalMarks,
   grade,
   result,

  });
  quizResult
    .save()
    .then(savedquizResult => {
      res.status(status.OK).send({
        savedquizResult,
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





const patchQuizForm  = async (req, res) => {
  const { quizFormId } = req.params;

  try {
    // Find the city by its ID
    let quizForm = await quizFormSchema.findById(quizFormId);

    if (!quizForm) {
      // Return a 404 response with a message indicating that the city was not found
      return res.status(404).json({ success: false, message: 'City not found' });
    }

    // Update the existing city's settings with the provided data
    quizForm.set(req.body);
    await quizForm.save();

    res.status(200).json({ success: true, message: 'City settings updated', data: quizForm });
  } catch (error) {
    console.error('Error updating city settings:', error);
    res.status(500).json({ success: false, message: 'Failed to update city settings' });
  }
};



const getOneResult = (req, res) => {
  const { id } = req.params; // Assuming the city is passed as a parameter

  quizResultSchema.findOne({ _id: id })
    .then(quizResult => {
      if (quizResult) {
        res.status(status.OK).send(quizResult);
      } else {
        res.status(status.NOT_FOUND).send({
          Message: 'product not found.',
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'Internal server error',
        Error: err,
      });
    });
};






const getAllResult= (req, res) => {
  quizResultSchema.find()
    .then(quizResult => {
      res.status(status.OK).send(quizResult);
    })
    .catch(err => {
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'No Events!',
        err,
      });
    });
};





//const postCourses = (req, res) => {
 // const { courseName, courseDuration, isFormOpen, noOfQuiz, feeInRupees, leadTrainerId, assistantTrainers, teacherId, message, read, notifyToAdmin, courseId, status, } = req.body;

// const postCourses = (req, res) => {
//   const { courseName, courseDuration, isFormOpen, noOfQuiz, feeInRupees, leadTrainerId, assistantTrainers, teacherId, message, read, notifyToAdmin, courseId, status } = req.body;


//   // Assuming you have properly defined the addtoCartSchema model
//   const postCourses = new coursesSchema({
//     courseName,
//     courseDuration,
//     isFormOpen,
//     noOfQuiz,
//     feeInRupees,  
//     leadTrainerId,
//     assistantTrainers,
//   });

//   postCourses
//     .save()
//     .then(savedcourses => {
//       const pusher = new Pusher({
//         appId: process.env.app_id,
//         key: process.env.key,
//         secret: process.env.secret,
//         cluster: process.env.cluster,
//         useTLS: true,
//       });
//       const newMessage = new notificationSchema({
//         teacherId,
//         message,
//         read,
//         status,
//         notifyToAdmin,
//         courseId,
//       });
//       newMessage
//         .save()
//         .then(async (savedMessage) => {
//           await pusher.trigger('my-channel', 'my-event', {
//             message: `user booked the order`,
//           });
//           console.log(savedMessage);
//           res.status(200).json(savedMessage);
//         })
//         .catch((error) => {
//           console.error('Error saving message to the database:', error);
//           res.status(500).json({ message: 'Error saving message to database.', error: error.message });
//         });
//     })
//     .catch(err => {
//       res.status(500).json({
//         Message: 'Internal Server Error',
//         error: err.message, // Use err.message to capture the error message
//       });
//     });
// };


const postCourses = (req, res) => {
  const { courseName, courseDuration, isFormOpen, noOfQuiz, feeInRupees, leadTrainerId, assistantTrainers } = req.body;

  // Assuming you have properly defined the coursesSchema model
  const newCourse = new coursesSchema({
    courseName,
    courseDuration,
    isFormOpen,
    noOfQuiz,
    feeInRupees,
    leadTrainerId,
    assistantTrainers,
  });

  newCourse
    .save()
    .then(savedCourse => {
      console.log(savedCourse);
      res.status(200).json(savedCourse);
    })
    .catch(err => {
      console.error('Error saving course to the database:', err);
      res.status(500).json({
        message: 'Error saving course to database.',
        error: err.message,
      });
    });
};



const postNotification = (req, res) => {
  const { teacherId, message, read, status, notifyToAdmin, courseId } = req.body;

  // Assuming you have properly defined the notificationSchema model
  const newMessage = new notificationSchema({
    teacherId,
    message,
    read,
    status,
    notifyToAdmin,
    courseId,
  });

  newMessage
    .save()
    .then(async (savedMessage) => {
      const pusher = new Pusher({
        appId: process.env.app_id,
        key: process.env.key,
        secret: process.env.secret,
        cluster: process.env.cluster,
        useTLS: true,
      });

      await pusher.trigger('my-channel', 'my-event', {
        message: 'User booked the order',
      });

      console.log(savedMessage);
      res.status(200).json(savedMessage);
    })
    .catch((error) => {
      console.error('Error saving message to the database:', error);
      res.status(500).json({ message: 'Error saving message to database.', error: error.message });
    });
};






const getAllNotificationsForUser= (req, res) => {
  notificationSchema.find()
    .then(notifications => {
      res.status(status.OK).send(notifications);
    })
    .catch(err => {
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'No Events!',
        err,
      });
    });
};




const getOneNotificationByUser = (req, res) => {
  const { id } = req.params; // Assuming the city is passed as a parameter

  notificationSchema.findOne({ _id: id })
    .then(notifications => {
      if (notifications) {
        res.status(status.OK).send(notifications);
      } else {
        res.status(status.NOT_FOUND).send({
          Message: 'product not found.',
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'Internal server error',
        Error: err,
      });
    });
};




const patchNotificationByUser  = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the city by its ID
    let notifications = await notificationSchema.findById(id);

    if (!notifications) {
      // Return a 404 response with a message indicating that the city was not found
      return res.status(404).json({ success: false, message: 'City not found' });
    }

    // Update the existing city's settings with the provided data
    notifications.set(req.body);
    await notifications.save();

    res.status(200).json({ success: true, message: 'City settings updated', data: notifications });
  } catch (error) {
    console.error('Error updating city settings:', error);
    res.status(500).json({ success: false, message: 'Failed to update city settings' });
  }
};





const postNotificationForUser = (req, res) => {
  const { teacherId, message, read, notifyToAdmin, courseId, status } = req.body;

  // Assuming you have properly defined the notificationSchema model
  const newMessage = new notificationforuserSchema({
    teacherId,
    message,
    read,
    notifyToAdmin,
    courseId,
    status,
  });

  newMessage
    .save()
    .then(async (savedMessage) => {
      const pusher = new Pusher({
        appId: process.env.app_id,
        key: process.env.key,
        secret: process.env.secret,
        cluster: process.env.cluster,
        useTLS: true,
      });

      await pusher.trigger('my-channel', 'my-event', {
        message: 'User booked the order',
      });

      console.log(savedMessage);
      res.status(200).json(savedMessage);
    })
    .catch((error) => {
      console.error('Error saving message to the database:', error);
      res.status(500).json({ message: 'Error saving message to database.', error: error.message });
    });
};





const getAllNotificationsForAdmin= (req, res) => {
  notificationforuserSchema.find()
    .then(notifications => {
      res.status(status.OK).send(notifications);
    })
    .catch(err => {
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'No Events!',
        err,
      });
    });
};



const getOneNotificationByAdmin = (req, res) => {
  const { id } = req.params; // Assuming the city is passed as a parameter

  notificationforuserSchema.findOne({ _id: id })
    .then(notifications => {
      if (notifications) {
        res.status(status.OK).send(notifications);
      } else {
        res.status(status.NOT_FOUND).send({
          Message: 'product not found.',
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(status.INTERNAL_SERVER_ERROR).send({
        Message: 'Internal server error',
        Error: err,
      });
    });
};



const patchUser  = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the city by its ID
    let users = await userSchema.findById(id);

    if (!users) {
      // Return a 404 response with a message indicating that the city was not found
      return res.status(404).json({ success: false, message: 'City not found' });
    }

    // Update the existing city's settings with the provided data
    users.set(req.body);
    await users.save();

    res.status(200).json({ success: true, message: 'City settings updated', data: users });
  } catch (error) {
    console.error('Error updating city settings:', error);
    res.status(500).json({ success: false, message: 'Failed to update city settings' });
  }
};




const patchNotificationByAdmin  = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the city by its ID
    let notifications = await notificationforuserSchema.findById(id);

    if (!notifications) {
      // Return a 404 response with a message indicating that the city was not found
      return res.status(404).json({ success: false, message: 'City not found' });
    }

    // Update the existing city's settings with the provided data
    notifications.set(req.body);
    await notifications.save();

    res.status(200).json({ success: true, message: 'City settings updated', data: notifications });
  } catch (error) {
    console.error('Error updating city settings:', error);
    res.status(500).json({ success: false, message: 'Failed to update city settings' });
  }
};








export default {

  getallusers,
  addCourses,
  getallcourses,
  getOnecourse,
  patchcourse,
  getOneuser,
  addQuizForm,
  getallQuizForm,
  getOneQuizForm,
  addQuizResult,
  patchQuizForm,
  getOneResult,
  getAllResult,
 postCourses,
getAllNotificationsForUser,
 getOneNotificationByUser,
 postNotification,
 patchNotificationByUser,
 getAllNotificationsForAdmin,
 postNotificationForUser,
 patchUser,
 getOneNotificationByAdmin,
 patchNotificationByAdmin,

};
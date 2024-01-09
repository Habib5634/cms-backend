import express from 'express';
import events from '../Controllers/cmsSystem';

// auth middlewares for admin
import isAdminMiddleware from '../Middlewares/isManager';
// auth middleware for user
 import isLoggedInUser from '../Middlewares/loggedIn';
// // validations
// import eventValidator from '../validations/event';

const TestRouter = express.Router();

// TestRouter.post(
//     '/add',

//     events.addTest,
// );

// TestRouter.get('/:Sid', events.getTest);

// TestRouter.get('/:eid', events.getSingleTest);

// // only admin can delete
// TestRouter.delete(
//     '/delete/:id',
//     isAdminMiddleware.isManagerOwner,
//     events.deleteTest,
// );

// TestRouter.patch('/edit/:id', events.editTest);

TestRouter.get(
    '/getallusers',
    // isAdminMiddleware.isManagerOwner,
    events.getallusers
);

// TestRouter.get(
//     '/getallTeachers',
//     events.getallusers
// );


TestRouter.post(
    '/postcourses',
    isAdminMiddleware.isManagerOwner,
    events.addCourses
);



TestRouter.get(
  '/getallcourses',
  events.getallcourses
);



TestRouter.get(
    '/getonecourse/:id',
    events.getOnecourse
);


TestRouter.patch(
    '/patchcourse/:courseId',
    isLoggedInUser.isLoggedIn,
    events.patchcourse
);



TestRouter.get(
    '/getoneuser/:id',
    // isAdminMiddleware.isManagerOwner,
    events.getOneuser
);


TestRouter.post(
    '/addQuizForm',
    isLoggedInUser.isLoggedIn,
    events.addQuizForm
);


TestRouter.get(
    '/getallquizform',
    events.getallQuizForm
);



TestRouter.get(
    '/getonequizform/:id',
    events.getOneQuizForm
);



TestRouter.post(
    '/addresult',
    isLoggedInUser.isLoggedIn,
    events.addQuizResult
);



TestRouter.patch(
    '/patchquiz/:quizFormId',
    isLoggedInUser.isLoggedIn,
    events.patchQuizForm
);


TestRouter.get(
    '/getoneresult/:id',
    isAdminMiddleware.isManagerOwner,
    events.getOneResult
);



TestRouter.get(
    '/getallresult',
    events.getAllResult
);


TestRouter.post(
    '/request-live',
    isAdminMiddleware.isManagerOwner,
    events.postNotification
);


TestRouter.get(
    '/getallnotifications',
    isLoggedInUser.isLoggedIn,
    events.getAllNotificationsForUser
);


TestRouter.get(
    '/getonenotification/:id',
    isLoggedInUser.isLoggedIn,
    events.getOneNotificationByUser
);

TestRouter.patch(
    '/patchnotification/:id',
    events.patchNotificationByUser
);


TestRouter.post(
    '/postnotificationforuser',
   isLoggedInUser.isLoggedIn,
    events.postNotificationForUser
);



TestRouter.get(
    '/getallbyadmin',
    isAdminMiddleware.isManagerOwner,
    events.getAllNotificationsForAdmin
);



TestRouter.patch(
    '/patchuser/:id',
    isLoggedInUser.isLoggedIn,
    events.patchUser
);



TestRouter.get(
    '/getonebyadmin/:id',
    isAdminMiddleware.isManagerOwner,
    events.getOneNotificationByAdmin
);


TestRouter.patch(
    '/patchnotificationbyadmin/:id',
    isAdminMiddleware.isManagerOwner,
    events.patchNotificationByAdmin
);




TestRouter.delete(
    '/deleteuser/:id',
    events.deleteuser,
);


TestRouter.delete(
    '/deletecourse/:id',
    events.deleteCourse
);


TestRouter.delete(
    '/deletequizform/:id',
    events.deleteQuizForm
);


TestRouter.delete(
    '/deleteadminnotification/:id',
    events.deleteNotificationsByAdmin
);


TestRouter.delete(
    '/deleteusernotification/:id',
    events.deleteNotificationsByUser
);





export default TestRouter;
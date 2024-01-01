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
    isAdminMiddleware.isManagerOwner,
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





export default TestRouter;
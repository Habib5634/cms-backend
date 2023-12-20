import express from 'express';
import events from '../Controllers/cmsSystem';

// auth middlewares for admin
import isAdminMiddleware from '../Middlewares/isManager';
// auth middleware for user
// import isLoggedInUser from '../Middlewares/loggedIn';
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
    isAdminMiddleware.isManagerOwner,
    events.getallusers
);


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
    isAdminMiddleware.isManagerOwner,
    events.patchcourse
);



TestRouter.get(
    '/getoneuser/:id',
    isAdminMiddleware.isManagerOwner,
    events.getOneuser
);


TestRouter.post(
    '/addQuizForm',
    isAdminMiddleware.isManagerOwner,
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





export default TestRouter;
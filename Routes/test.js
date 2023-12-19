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




export default TestRouter;
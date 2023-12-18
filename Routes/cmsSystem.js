import express from 'express';
import cmsSystem from '../Controllers/cmsSystem';

// auth middlewares for admin
// import isAdminMiddleware from '../Middlewares/isManager';
// // auth middleware for user
import isLoggedInUser from '../Middlewares/loggedIn';
// validations
// import eventValidator from '../validations/event';

const cmsSystemRouter = express.Router();



export default cmsSystem;
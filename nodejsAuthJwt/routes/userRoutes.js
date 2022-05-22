import express from "express";
const router =express.Router();
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/authmiddlewares.js";

//Route Level Middleware - To Protect Rout
router.use('/changepassword',checkUserAuth)
router.use('/loggeduser',checkUserAuth)


// Public Routes
router.post('/register',UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/send-reset-password-email',UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token',UserController.userPasswordReset)





// Protected Router
router.post('/changepassword',UserController.changeUserPassword)
router.get('/loggeduser',UserController.loggedUser)
export default router
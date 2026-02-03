import express from 'express';
import { UserReport,  LoginUser} from '../controllers/user.controller.js';
const router = express.Router();

router.get('/', UserReport);
router.post('/', LoginUser)
export default router;
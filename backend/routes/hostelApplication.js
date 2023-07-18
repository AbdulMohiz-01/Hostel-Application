import express from 'express';
import { getApplication, createApplication } from '../controllers/hostelApplication.js';

const router = express.Router();


/**
we can do 4 things in routes:
get, post, put, delete:-

get: to get something from database
post: to insert something in database
put: to update something in database
delete: to delete something from database
*/
router.get('/', getApplication);

router.post('/', createApplication);

export default router;


/**
 * This file defines routes for each view.
 * 
 * @author Yadira Cervantes
 */

import { Router } from 'express';
import { getHome, getPrograms, getContact, getResources, getProgramOutline } from './../controllers/controller.js';

const router = Router();

// Define routes
router.get('/', getHome);
router.get('/programs', getPrograms);
router.get('/contact', getContact);
router.get('/resources', getResources);
router.get('/program-outline', getProgramOutline)

export default router;
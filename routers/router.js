/**
 * This file defines routes for each view.
 * 
 * @author Yadira Cervantes
 */

const { Router } = require('express');
const { getHome, getPrograms, getContact, getResources, getProgramOutline, getDispachTrackAviationTechPlan, getFAQ, getDocuments, getLogIn } = require('./../controllers/controller.js');

const router = Router();

// Define routes
router.get('/', getHome);
router.get('/programs', getPrograms);
router.get('/contact', getContact);
router.get('/resources', getResources);
router.get('/documents', getDocuments);
router.get('/faq', getFAQ);
router.get('/program-outline', getProgramOutline);
router.get('/log-in', getLogIn)

// Program outline router for PDF files
router.get('/documents/:fileName', getDispachTrackAviationTechPlan);

module.exports = router;
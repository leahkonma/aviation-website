/**
 * Route handlers for rendering pages in the application.
 *
 * @author Yadira Cervantes
 */

const path = require("path");

const getHome = (req, res) => res.render('index', {title: 'GRC Aviation'});

const getPrograms = (req, res) => res.render('programs', {title: 'Programs'});

const getResources = (req, res) => res.render('resources', {title: 'Resources'});

const getContact = (req, res) => res.render('contact', {title: 'Contact'});

const getProgramOutline = (req, res) => res.render('program-outline', {title: 'Program Outline'});

const getFAQ = (req, res) => res.render('faq', {title: 'FAQ'});

const getLogIn = (req, res) => res.render('log-in', {title: 'Admin Log In'});

const getDocuments = (req, res) => res.render('documents', {title: 'Documents'});

const getDispachTrackAviationTechPlan = (req, res) => { 
    const fileName = req.params.fileName; 
    const filePath = path.join(__dirname, "..", "public", "Files", fileName);
    console.log(filePath)
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).send("Error downloading file.");
        }
    });
}

module.exports = {
    getHome,
    getPrograms,
    getResources,
    getContact,
    getProgramOutline,
    getDispachTrackAviationTechPlan,
    getFAQ, 
    getDocuments,
    getLogIn
};
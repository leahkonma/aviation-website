/**
 * Route handlers for rendering pages in the application.
 *
 * @author Yadira Cervantes
 */

const path = require("path");

/**
 * Renders the home page.
 * 
 * @function getHome
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getHome = (req, res) => {
    res.render('index', {title: 'GRC Aviation'});
}

/**
 * Renders the programs page.
 * 
 * @function getPrograms
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getPrograms = (req, res) => {
    res.render('programs', {title: 'Programs'});
}

/**
 * Renders the resources page.
 * 
 * @function getResources
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getResources = (req, res) => {
    res.render('resources', {title: 'Resources'});
}

/**
 * Renders the contact page.
 * 
 * @function getContact
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getContact = (req, res) => {
    res.render('contact', {title: 'Contact'});
}


/**
 * Renders the Program Outline page.
 * 
 * @function getProgramOutline
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getProgramOutline = (req, res) => {
    res.render('program-outline', {title: 'Program Outline'});
}

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
    getDispachTrackAviationTechPlan
};
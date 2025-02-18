/**
 * Route handlers for rendering pages in the application.
 *
 * @author Yadira Cervantes
 */

/**
 * Renders the home page.
 * 
 * @function getHome
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getHome = (req, res) => {
    res.render('index', null);
}

/**
 * Renders the programs page.
 * 
 * @function getPrograms
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getPrograms = (req, res) => {
    res.render('programs', null);
}

/**
 * Renders the resources page.
 * 
 * @function getResources
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getResources = (req, res) => {
    res.render('resources', null);
}

/**
 * Renders the contact page.
 * 
 * @function getContact
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getContact = (req, res) => {
    res.render('contact', null);
}

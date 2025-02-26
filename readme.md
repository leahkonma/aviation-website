# Aviation Technology Website
This website provides information and resources for Green River aviation students, prospective students, and alumni.

<hr>

### Table of Contents

- [`External Resources and Documentation`](#external-resources-and-documentation)

- [`Development Configurations`](#development-configurations)

- [`How to Contribute`](#how-to-contribute)

- [`Adding and Editing Views`](#adding-and-editing-views)

    - [`Adding an Image`](#adding-an-image)

    - [`Adding a View`](#adding-a-view)

    - [`Adding a Page Link in the Navbar`](#adding-a-page-link-in-the-navbar)

</br>
<hr>

### External Resources and Documentation

- [Embedded JavaScript (EJS)](https://ejs.co/): Our chosen templating language.

- [Node.js](https://nodejs.org/en): JS runtime environment for quickly creating servers and web apps.

- [Node Package Manager (npm)](https://www.npmjs.com/): Library of packages for Node.js.

- [Express](https://expressjs.com/): Node.js routing framework.

- [Dotenv](https://www.dotenv.org/docs/): Handles sensitive variables/information and keeps them out of source code.

- [Nodemon](https://nodemon.io/): Automatically reloads edited files for testing and development.

</br>
<hr>

### Development Configurations

1. Install Node.js

2. Run this npm command to install all dependencies:

    ``` 
    npm install 
    ```

    Or manually install dependencies:

    ```
    npm i express ejs dotenv 
    npm i nodemon --save-dev
    ```

    - Note: Nodemon must be installed as a development dependency

3. Create a config.env file in the root directory

    - Create the following variables in the env file:

        ```
        PORT=YOUR_PORT_NUMBER_HERE
        ```

4. Run this command for live updates:

    ```
    npm run dev
    ```

</br>
<hr>

### How to Contribute
1. Clone the repository
2. Complete the development configurations
3. Learn about adding and editing views [`here`](#adding-and-editing-views)
4. Write/update code documentation
5. Update the README file

</br>
<hr>

### Adding and Editing Views

#### Adding an Image
1. Move your image to the Images folder in the public directory
2. Add the `<img>` tag to the .ejs file that corresponds to the page you want to edit
3. Fill in the src attribute **relative to the public folder**


#### Adding a view
1. Create a .ejs file for your view in the views directory
2. Include the head.ejs file, navbar.ejs file, and footer.ejs file in your view
    - Ex:

        ```
        <%- include('head') %>

        ...

        <%- include('navbar') %>

        Your other code here...

        <%- include('footer') %>
        ```

3. Add a controller method in the controller.js file in the controllers directory
    - Ex:

        ```
        export const getViewNameHere = (req, res) => {
            res.render('viewNameHere', {title: 'View Title Here'});
        }
        ```

    - Note: add the webpage title as an argument of the render function as seen above

4. Import the controller method into the router.js file in the routers directory
5. Define a route for this view in the router.js file
    - Ex:

        ```
        router.get('/route', getViewNameHere);
        ```

    - Note: use the right HTTP verb functions (get(), put(), post(), delete())

#### Adding a Page Link in the Navbar
1. In the navbar.ejs file, add an `<a>` tag and a label
2. Add the href attribute and **set it to the route you defined in the router.js file**
    - Ex:

        ```
        <a href="/route">View Label Here</a>
        ```
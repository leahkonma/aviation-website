# Aviation Technology Website

### Description:
This website provide information and resources for Green River aviation students, prospective students, and alumni.

</br>
<hr>

### Table of Contents
- [`Development Configurations`](#development-configurations)

- [`How to Contribute`](#how-to-contribute)

- [`Adding and Editing Views`](#adding-and-editing-views)

    - [`Adding an Image`](#adding-an-image)

    - [`Adding a View`](#adding-a-view)

    - [`Adding a Page Link in the Navbar`](#adding-a-page-link-in-the-navbar)

- [`External Resources and Documentation`](#external-resources-and-documentation)

</br>
<hr>

### Development Configurations

1. Install Node.js

2. Run this npm command to install all dependencies:

    ``` 
    npm update 
    ```

    Or manually install dependencies:

    ```
    npm i express ejs dotenv 
    npm i nodemon --save-dev
    ```

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
5. Update the readme file

</br>
<hr>

### Adding and Editing Views

#### Adding an Image
1. Move your image to the Images folder in the public directory
2. Add the `<img>` tag to the .ejs file that corresponds to the page you want to edit
3. Fill in the src attribute **relative to the public folder**


#### Adding a view
1. Create a .ejs file for your view in the views directory
2. Add a controller method in the controller.js file in the controllers directory
    - Ex:

        ```
        export const getViewNameHere = (req, res) => {
            res.render('viewNameHere', null);
        }
        ```

3. Import the controller method into the router.js file in the routers directory
4. Define a route for this view in the router.js file
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

</br>
<hr>

### External Resources and Documentation
- [EJS Documentation](https://ejs.co/)
- [Node.js Website](https://nodejs.org/en)
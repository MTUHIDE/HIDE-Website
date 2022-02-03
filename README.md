# HIDE Website

This is the primary HIDE website, which is found [here](http://hide.cs.mtu.edu/).

This site uses [React](https://reactjs.org/) for the front end.

## Installation

1. Install [NodeJS](https://nodejs.org/en/).
2. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
2. Run ```yarn install```.
3. Run the ```yarn start``` command to start a local server.
4. Open <http://localhost:3000/> to see the app.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**Contacts:** 
 - Charles Vidro - <cjvidro@mtu.edu>
 - Eva Muller - <emmuller@mtu.edu>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies Involved With This Project
- React - [https://reactjs.org/](https://reactjs.org/)
- CSS - [https://www.w3schools.com/css/](https://www.w3schools.com/css/)
- CPanel - [https://docs.cpanel.net/](https://docs.cpanel.net/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Code Organization
`App.jsx` contains the routing information for the application.

`Carousel.jsx` contains the carousel component for the current projects page.

`Contact.jsx` contains the general contact information for the enterprise, including the general meeting time, location, and the Zoom link.

`CurrentProjects.jsx` contains information for the current projects page.

`Faq.jsx` contains the FAQ section as well as a function for each "dropdown" called an accordion.

`Home.jsx` is the base page for the home page of the application.

`Management.jsx` contains the management section as well as a function to create new management cards.

`ProjectSummaries.jsx` contains all of the project summaries on the home page.

`ProjectSummary.jsx` is the component for an individual project summary.

`package.json` additional dependencies for the project can be added in the package.json file.

### Deployment Process
- The site is hosted at [https://hide.cs.mtu.edu/](https://hide.cs.mtu.edu/).
- Create a build using `yarn run build`.
- Log in to cPanel.
- Navigate to the file manager.
- Find the `public_html` directory.
- Upload the files at the root of the newly generated build folder (.htaccess, index.html, manifest.json, etc.).
- Upload the contents of the static folder.
- Upload any changes to the js, img, fonts, css, and bower_components folders if changes were made.
- Return to the [HIDE site](https://hide.cs.mtu.edu/) and ensure the site is working correctly (Sometimes you need to do a [forced reload](https://www.howtogeek.com/672607/how-to-hard-refresh-your-web-browser-to-bypass-your-cache/#:~:text=There%20are%20also%20keyboard%20shortcuts,Press%20Shift%2BCommand%2BR.) due to cached content).

## License
[MIT](https://choosealicense.com/licenses/mit/)

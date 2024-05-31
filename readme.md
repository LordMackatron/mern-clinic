Purpose: The purpose of this application is to create a webpage for a fictional clinic in a fictional town in the United States. 
I used the abbreviation of Puerto Rico as a stand-in for a fictional state. 
This website will utilize a database to keep track of patients information wthin the clinic.
The database will record the name, email, phone number, service needed, and medical insurance of the patients.

Technologies Needed: Node.js, Git/Github Account, Mongo DB Account, Visual Studio Code, 

Necessary Backend Dependencies: Mongoose, cors, Express, Nodemon

Necessary Frontend Dependencies: MUI, Axios, React

Created Cluster on MondoDB (Cluster 0) to hold database and collection.
![Image of Cluster 0](<Screenshot (88).png>)

Created database (clinic) and collection (patientInformation) in MondoDB.
![Image of created Database and Collection in Cluster 0](<Screenshot (89).png>)

Created "client" and "server" folders in new Visual Studio Code window for frontend and backend files.

Created package.json file through "npm init -y" command. 

Installed Backend dependencies (mongoose, cors, express, and nodemon). 
![Image of backend dependencies being installed in the Terminal window](<Screenshot (92).png>)

Amended the package.json content.
![Image of Amended package.json content](<Screenshot (94).png>)

Created index.js file inside of the "server" folder and defined the port used in this project. 

Started the backend server with the "npm start" command in the Terminal window and made connection with the database.
![Image of backend server being started with the connection to the database being the result](<Screenshot (97).png>)

Created "model" folder in the server folder and then created a file, patientInformation (the same name as my collection), to hold the mongoose model. 
![Image of created model folder with patientInformation.js file in it](<Screenshot (98).png>)

Created variables for use of mongoose dependency and the schemas employed for the database in patientInformation.js. Nodemon resterted automatically after save was made to the code. 

Created another folder in the server folder called "controllers" for the functionality for the urls. Also created a file, patient-controllers.js for the code. patientSchema variable created along with functions for the controls for the database. 
![Image of controllers folder and patient-controller file inside of the server folder](<Screenshot (101).png>)
![Image of changes being accepted by the database](<Screenshot (108).png>)

Created "routes" folder in server folder and the created "patient-routes-js" file to assign functionality to urls. Placed code in the file. There was an error in the original code used in the index.js file which cause the app to crash and wait for debugging to reconnect to the database. Error debugged and connection to database reestablished. 
![Image of routes folder and patient-routes file](<Screenshot (109).png>) 
![Image of error message and reconnection to database after the error was fixed](<Screenshot (110).png>) 

Amended the index.js file to specify the url and the main unique identifier for url.  
![Image of reconnection to database after changes were made](<Screenshot (113).png>)

Tested the urls using Thunder Client. 
![Image of Thunder Client retriving patient information of all three patients](<Screenshot (118).png>)

Retrieved ONLY the patient information from Charles Whitt using the get function. 
![Image of the retrieval of Charles Whitt's information](<Screenshot (119).png>)

Posted information of a new fictional patient to the fictional clinic. New fictional patient is Timothy Owens. 
![Image of new patient posted](<Screenshot (121).png>) 
![Image of new patient added to database](<Screenshot (122).png>)

Changed the service needed for Timothy Owens to test out the put function and see if amendments could be made and accepted by the database. 
![Image of amendment made to Timothy Owens patient infomation](<Screenshot (123).png>) 
![Image of amendment accepted](<Screenshot (124).png>)

Deleted Timothy Owens from the database to check the delete function. Delete function deleted fictional patient Rikita Reed instead of Timothy Owens. Repeated delete function and it kept deleting the first patient on the list. Amended Code in patient-controller.js so that delete function would deleted by ID instead of deleted by the order in which patient is placed in the database. Timothy Owens deleted along with other test patients. 
![Image of new database list with on one entry](<Screenshot (127).png>)

Installed react in the "client" folder using the command, "npx create-react-app ." in the Terminal window. 

Installed react router for urls and CRUD operations using command, "npm install react-router-dom@6." 

Installed MaterialUI Library to render images using the same command.

Installed Axios.

Started the React server. 

Got rid of all default React values in the src folder. This includes clearing out all of the content for the app.css/index.css/app.js files and deleting the app.test.js/reportwebvitals/logo.svg/setupTest.js files.

Created a "components" folder in the src folder with a JavaScript file for the header, home page, and the Patient Information form. 

Added Images folder in src folder to store all images used in the frontend.

Amended app.js file with new code importing dependencies and the information from files in the componensts folder. 

Coded all newly created files in components folder. The images of the output of the code is found below. 
![alt text](<Screenshot (137).png>)
![alt text](<Screenshot (138).png>) 
![alt text](<Screenshot (139).png>) 
![alt text](<Screenshot (140).png>) 
![alt text](<Screenshot (141).png>) 
![alt text](<Screenshot (142).png>) 
![alt text](<Screenshot (143).png>) 
![alt text](<Screenshot (144).png>)
![alt text](<Screenshot (145).png>)

Submitted patient information from frontend. Used new (previously used) patient Lucille McGillacutty as example. 
![Image of new patient information inputted into form](<Screenshot (147).png>) 
![Image of alert](<Screenshot (148).png>) 
![Image of database with new patient added](<Screenshot (149).png>)
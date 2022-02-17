# MERN application - Plan Your Trip!

Project created while learning and practising for my Master's thesis project.

## How to run

1. Either fork or download the app and open the folder in the CLI (like Visual Studio Code)
2. Install all the dependencies using the `npm i` command in the terminal
3. Navigate to the client folder (with cd client) and repeat the dependencies installation process. Return to the previous folder (using cd ..)
4. In the config/config.env folder type your authentication credentials for the MongoDB Atlas database
5. Start the application using the `npm run dev` command. You can now use the app in the browser at http://localhost:3000/
6. If you wish to run the client side only, use `npm run client`. For the back-end use `npm run server`


## User stories

(Registration page)
- A user can register as a new user 
- A user can login after registration
- A user can demand a password restart
- A user can restart his/her password

(To do page)
- A user can add a new task
- A user can mark the task as `important` 
- A user can mark the task as finished
- A user can hide or show the `add task` portion of the page

(Budget page)
- A user can add a new item to the list 
- A user can delete an item from the list
- A user can specify his/her budget 

(Map page)
- A user can add a new location pin
- A user can add the location name of the pin and a description
- A user can view his/her pins on the map

(Gallery page)
- A user can select a .jpeg or .png file to upload
- A user can delete photos from the gallery


## Features
 

## Dependencies

- axios
- bcryptjs
- body-parser
- colors
- concurrently
- cors
- dotenv
- express
- framer-motion
- jsonwebtoken
- mongoose
- morgan
- multer
- nodemailer
- nodemon
- react-map-gl

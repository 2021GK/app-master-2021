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
- A user can mark the task as completed
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

- A new user gets registered provided a unique email address has been inserted
- Whenever a password and a password confirmation are required, it gets checked if they match
- If a user is logged in, he/she cannot return to the Login page before logging out
- The password reset token which is sent to the user's email address expires after 60 minutes

- An unlimited number of tasks can be added
- Tasks get stored in a MongoDB database, along with information like whether the task is important/completed
- Tasks that are important and are checked as completed, get marked as not important

- If a category for an item is not chosen, the default category is "miscellaneous"
- An item amount can be 0, but an item cannot be without text

- A pin with it's location, title and description gets sent to the backend
- Only one pin details box can be open at one time
 
- A photo gets stored in the 'uploads' folder and added to a database list (MongoDB database)
- The selected file cannot be uploaded if it's not a .jpeg or .png file
- If a photo is deleted, it gets removed from the database


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

![alt text](https://github.com/2021GK/app-master-2021/blob/master/register.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/forgotpass.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/login.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/resetpass.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/todo.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/Budget.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/map.jpg)
![alt text](https://github.com/2021GK/app-master-2021/blob/master/gallery.jpg)

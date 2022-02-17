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


- A user can select a .jpeg or .png file to upload
- A user can delete photos from the gallery

### How to use the app

Uploading a new photo:
- Click on the '+' button
- Choose a .jpeg or .png file from your computer
- Click ok
- Click 'upload'

Deleting a photo:
- Click on the x icon in the upper left corner of the photo you want to remove from the gallery

## Dependencies

- mongoose
- multer
- framer-motion
- express
- cors
- body-parser
- concurrently
- axios

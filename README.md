# Gvideo - Video Gallery

![logo](https://user-images.githubusercontent.com/11543544/169926753-0c02f9c3-b838-4a8c-84fe-45f6e3fefb2d.png)

This small project was suggested by tl;dv to assess the knowledge and Full-Stack skills of the interviewees. The objective is to create a video gallery with NodeJS as the back-end, ReactJS as the front-end and MongoDB for the database.

## Requirements
- `react-scripts`
- `node` >= v14.0.0
- `npm` >= v5.6

Before anything please clone the repository using the command `git clone https://github.com/Guiguerreiro39/gvideo.git`.

## Features
I've completed all the main features requested for this project. There are also other features that I've considered necessary in order to have a more robust application. The features in each of the branches are as follow:

### master
- [x] Bootstrap a new API with a mongo database.
- [x] Add a new Content Type resource : Video API reachable on /videos.
- [x] Create a small React App to consume this API.
  - [x] List all the videos in the API.
  - [x] View a specific video when you click on the item in the list.
  - [x] Edit a specific video 
- [x] Write tests.

### bonus-frontend
- [x] Create a new page to create a new video entry.
- [x] Appealing UI design.
- [x] Responsive design.

## Design
I've decided to create the design of the Web application using Figma to guide me when developing the front-end. 
The Figma page can be found here: https://www.figma.com/file/n1QG07iSPZwPxtVr3lLEaw/Untitled?node-id=3%3A531

## Back-end
The back-end is a REST API made in NodeJS/Express and uses the `mongoose` module to connect to the MongoDB. The MongoDB database has only one collection: **videos**. This collection contains the following fields:
- `title` (String) - the title of the video.
- `description` (String) - the description of the video.
- `url` (String) - the url of the video.
- `thumbnail` (String) - the url of an image to use as the thumbnail.
- `slug` (String) - a word to identify the type of video.
- `isPublic` (Boolean) - a boolean value to validate whether the video is public or not.

### How to run
1. Navigate to the **backend** folder and run `npm install`. The dependencies should be installed.
2. Make sure your **MongoDB** server is running. If not, run the command `mongod --dbpath C:\<PATH_TO_MONGODB_FOLDER>\data\`.
3. Change any necessary data in the **sample.env** file (for instance the `DB_URL` to the correct port of your **MongoDB** server) and rename it to **.env**.
4. Simply run the back-end by using the command `npm run dev`.

![image](https://user-images.githubusercontent.com/11543544/169924826-c18c8cac-0a9f-42f8-ac11-5ea00ebf3460.png)

### Tests
I've written some tests for the different requests I have in the back-end. There are 4 tests:
1. `GET /videos` Retrieve all videos - This test assesses if the status code is 200 and if the objects received are correct.
2. `GET /videos/:id` Retrieve the video with the given id - This test assesses if the status code is 200 and if the object received is correct.
3. `PATCH /videos/:id` Update the video with the given id - This test assesses if the status code is 200, if the object returned is the one provided in the beginning and also if the object is correct.
4. `POST /videos` Create a video - This test assesses if the status code is 200 and if the returned object is correct.

To run the tests simply change the `NODE_ENV` field in the **.env** file to `test` and use the command `npm test`.

![image](https://user-images.githubusercontent.com/11543544/169924728-be821ff6-c878-46a7-8e74-7ee9c9b31b6d.png)

## Front-end
The front-end is a React application which uses **tailwindcss** module to style the pages and **axios** to process HTTP requests.

### How to run
1. Navigate to the **frontend** folder and run `npm install`. The dependencies should be installed.
2. Change any necessary data in the **sample.env** file (only if your back-end port is different from the default :9000) and rename it to **.env**.
3. Simply run the front-end by using the command `npm run start`.
4. If an error occurs regarding the `react-scripts` module, make sure it is installed globally.

### Home page
![image](https://user-images.githubusercontent.com/11543544/169926281-08d84e3a-39fb-408a-920c-48d1160ba28b.png)

### Video page
![image](https://user-images.githubusercontent.com/11543544/169926489-88edad9f-588f-48bc-96e1-8af72cac285b.png)

### Edit Video Modal
![image](https://user-images.githubusercontent.com/11543544/169926541-03df42a7-1d04-47d1-a268-650eace7aaac.png)


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

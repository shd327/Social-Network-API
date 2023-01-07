# Social-Network-API

### Siddharth Desai

## Description
The objective here was to use Express.js, Compass, mongoose, mongoDB to build a social network API where the user can have a network of friends, react, and share opinions. With the power of Insomina we can fetch data from the mongo database and check the REST calls with Insomina


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
5. [ Tests. ](#tests)
6. [ Questions. ](#questions)
7. [ Screenshots. ](#screenshots)
8. [ Links. ](#links)
9. [ Resources. ](#resources)

## Installation
* Clone the repository using:
```
git clone git@github.com:shd327/Social-Network-API.git
```
* Ensure you are in the current working directory
* Ensure all dependencies are installed as shown below installation instructions are below:
```
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^6.8.1"
  },
}

```
Run the below commands to install any missing dependencies
```
npm install express
````
```
npm install mongoose
```
Or, 
```
npm i
```
To run the Social Media API project enter the following command:
```
npm run start 

```
## Usage
* Ensure all depencies and above steps are fulfilled 
* Navigate to the working directory and open a terminal and run the below command


* Navigate to the working directory in the terminal and run the below to start the application
```
npm start
```

## License

Copyright <2022>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests
N/A

## Questions?
Want to see more of my work? [Github Link](https://github.com/shd327)
<br/>
Want to learn more please contact me at shdesai327@gmail.com


## Screenshots
![](img/1.gif)
![](img/2.gif)
![](img/3.gif)
![](img/4.gif)


## Links
* [Github Link](https://github.com/shd327/Social-Network-API/)
* [Video Link](https://drive.google.com/file/d/15z5ca6K1VLlstxMLDYjPT6pZnMBqMtgy/view?usp=sharing) 


## Resources
* https://www.npmjs.com/package/mongoose
* https://www.tutorialspoint.com/mongodb/index.htm

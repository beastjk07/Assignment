I have used Node.js to complete the assignment.

Steps to run

 - Clone the repository
 - Run npm install in the terminal
 - Run nodemon node.js

/static/util.js
 - has a test input array with size 100 on which I have executed the assignment

 
For efficient api call, I have used mapping where the calls which are already made is cached and same request is not made again.

To handle HTTP 429 error I have given slight delay so that it runs smoothly without any interruption.
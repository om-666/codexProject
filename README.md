# codexProject

TECHSTACK USE
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
HTML:

HTML (Hypertext Markup Language) is a markup language used to create web pages. HTML uses tags and attributes to define different elements on a web page such as text, images, links, and forms. HTML is the foundation of all websites and is essential for creating web pages.

CSS:

CSS (Cascading Style Sheets) is a style sheet language used to describe the look and formatting of a document written in HTML. CSS is used to define the layout, color, font, and other visual aspects of a web page. CSS works by defining rules that apply to specific HTML elements. CSS allows web developers to separate the content of a web page from its presentation, making it easier to maintain and update.

JavaScript:

JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web pages. JavaScript is executed on the client-side, meaning it is processed by the user's web browser rather than on the server. JavaScript is used for creating animations, validating form data, and updating the content of a web page without requiring a page reload.

Node.js:

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment. Node.js allows developers to use JavaScript on the server-side to create web applications. Node.js includes a built-in library of modules, making it easy to build scalable and high-performance web applications. Node.js is popular for its ability to handle large volumes of data and its flexibility in creating RESTful APIs.

Socket.io:

Socket.io is a JavaScript library that enables real-time, bidirectional communication between web clients and servers. Socket.io uses web sockets to create a persistent connection between the client and the server. Socket.io is commonly used for chat applications, online gaming, and real-time data sharing. Socket.io works with Node.js and can be integrated with any web framework that supports Node.js.

Overall, HTML, CSS, JavaScript, Node.js, and Socket.io are all essential components of modern web development. Understanding these technologies and how they work together is critical for creating dynamic and interactive web applications.
HOW TO RUN  NODEJS AND SOCKET.IO:
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Install Node.js:
Visit the official Node.js website (https://nodejs.org/) and download the latest version of Node.js for your operating system. Follow the installation instructions to install Node.js on your system.

Install Socket.io:
Once Node.js is installed, open a command prompt or terminal and enter the following command to install Socket.io:

 
 RUN THE CODE -npm install socket.io
This command will install the latest version of Socket.io in your project directory.

Create a Node.js project:
Create a new directory for your Node.js project and navigate to it using the command prompt or terminal. Use the following command to create a new package.json file:
 
npm init
This command will prompt you to enter some information about your project and create a package.json file.
In the command prompt or terminal, navigate to your project directory and run the following command to start the Node.js server:
Copy code
node server.js
This will start the server and print a message in the console indicating that the server is listening on port 3000.
HOW TO RUN MY CODE
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
To get started, open the main .html file located in the navigation bar. Click on Contact to be directed to that page, and if you want to return to the main page, just click Home..

Just click the boxes.......
The first box allows you to log in or register, while the second one enables you to input your demands. By entering your demands' name and number, it will be stored in local Storage for future reference.

For real time chat, a 3rd box is dedicated to it. If you don't download Node JS Socket.js, you won't be able to do it, as you need two servers for live chatting. Additionally, the 4th box is dedicated to a feedback form.
To navigate back to the home page, simply click on the 'Home' button.

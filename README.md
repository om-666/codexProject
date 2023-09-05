# Project Name: codexProject

## Tech Stack Used

- **HTML:** HTML (Hypertext Markup Language) is a markup language used to create web pages. HTML uses tags and attributes to define different elements on a web page such as text, images, links, and forms. HTML is the foundation of all websites and is essential for creating web pages.

- **CSS:** CSS (Cascading Style Sheets) is a style sheet language used to describe the look and formatting of a document written in HTML. CSS is used to define the layout, color, font, and other visual aspects of a web page. CSS works by defining rules that apply to specific HTML elements. CSS allows web developers to separate the content of a web page from its presentation, making it easier to maintain and update.

- **JavaScript:** JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web pages. JavaScript is executed on the client-side, meaning it is processed by the user's web browser rather than on the server. JavaScript is used for creating animations, validating form data, and updating the content of a web page without requiring a page reload.

- **Node.js:** Node.js is an open-source, cross-platform, back-end JavaScript runtime environment. Node.js allows developers to use JavaScript on the server-side to create web applications. Node.js includes a built-in library of modules, making it easy to build scalable and high-performance web applications. Node.js is popular for its ability to handle large volumes of data and its flexibility in creating RESTful APIs.

- **Socket.io:** Socket.io is a JavaScript library that enables real-time, bidirectional communication between web clients and servers. Socket.io uses web sockets to create a persistent connection between the client and the server. Socket.io is commonly used for chat applications, online gaming, and real-time data sharing. Socket.io works with Node.js and can be integrated with any web framework that supports Node.js.

Overall, HTML, CSS, JavaScript, Node.js, and Socket.io are all essential components of modern web development. Understanding these technologies and how they work together is critical for creating dynamic and interactive web applications.

## How to Run Node.js and Socket.io

1. **Install Node.js:**
   - Visit the official Node.js website [https://nodejs.org/](https://nodejs.org/) and download the latest version of Node.js for your operating system.
   - Follow the installation instructions to install Node.js on your system.

2. **Install Socket.io:**
   - Once Node.js is installed, open a command prompt or terminal and enter the following command to install Socket.io:

   ```
   npm install socket.io
   ```

   This command will install the latest version of Socket.io in your project directory.

3. **Create a Node.js project:**
   - Create a new directory for your Node.js project and navigate to it using the command prompt or terminal.
   - Use the following command to create a new package.json file:

   ```
   npm init
   ```

   This command will prompt you to enter some information about your project and create a package.json file.

4. **Start the Node.js server:**
   - In the command prompt or terminal, navigate to your project directory and run the following command to start the Node.js server:

   ```
   node server.js
   ```

   This will start the server and print a message in the console indicating that the server is listening on port 3000.

## How to Run the Code

To run the code for the codexProject:

1. Open the main `.html` file located in the navigation bar.
2. Click on "Contact" to be directed to that page.
3. To return to the main page, click on "Home."

**Interacting with the Boxes:**
- The first box allows you to log in or register.
- The second box enables you to input your demands. By entering your demand's name and number, it will be stored in local storage for future reference.
- For real-time chat, a third box is dedicated to it. Make sure you have Node.js and Socket.io installed to enable live chatting, as you need two servers for this functionality.
- The fourth box is dedicated to a feedback form.

To navigate back to the home page, simply click on the 'Home' button.

If you encounter any difficulties running the program, please inspect the code for any errors.

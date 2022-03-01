Creating REST API | Simplified

What is an API?
An API is an Application Programming Interface that lets you connect two computers, where one computer or application requests the data from the server.

What is a REST API?
A REST API or RESTful API is an application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

Re- Representational
S- State
T- Transfer

Steps:

1. Install Node.js on your machine, using the following link
   https://nodejs.org/en/

2. create an empty directory and initialize your project by running the following command

   `mkdir your-folder-name`
   `cd your-folder-name`
   `npm init -y`

<!-- npm init -y Will simply generate an empty npm project without going through an interactive process.-->

3.  The next step is to create an empty JavaScript file and install Express.

    npm install express

4.  Initialize the `app` and start the local server at port 3000.

    Run `node index.js` to start the server.

5.  Now the server is running successfully at port 3000, Next we create an `endpoint`.
    <!--
    For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.-->

    The `get` method allows us to create HTTP GET requests.

          It accepts two params:

             - The first is path/route.

             - The second is a callback function that handles the request to the specified route.

6.  Suppose we want to display all the users whenever the client requests the "/users" endpoint.

    We have the `send` method, to return the data from the server to the client

    We will send an array of objects with `name` and `id` fields.

7.  Run node index.js again and go to the path specified in the code to check the APIs in action! 👍

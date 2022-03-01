const app = require("express")();

app.listen(
    3000,
    () => console.log("The App is running on port 3000")
);

// creating a GET request
app.get('/path', (req, res) => {
    res.status(200).send([
        { name: 'Nikhil', id: 1 },
        { name: 'Mishra', id: 2 },
    ])
});

// creating a POST request
app.post("/user/3", (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).send({ message: "Add a name for the user" })
    }
    res.send({ name: name, id: 3 });
});


/**
 * listen() function is used to establish the connection on specified host and port.

It takes two params:

- The first is the port number or host.

- The second (optional) is a callback function that runs after listening to a specified host or value.
 */


/**
 * The callback function accepts two arguments:
    - Request which is the data to the server.
    - Response which is the data to the client.
 */
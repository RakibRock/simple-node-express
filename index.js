const express = require("express");
const cors = require("cors");
const app = express();

//use cors as middleware
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from node, nodemon is added");
});

const users = [
  { id: 0, name: "peter", email: "peter@gmail.com" },
  { id: 1, name: "sabnoor", email: "peter@gmail.com" },
  { id: 2, name: "putika", email: "peter@gmail.com" },
  { id: 3, name: "pamm", email: "peter@gmail.com" },
  { id: 4, name: "liander", email: "peter@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  console.log("hitting the post", req.body);
  res.json(newUser);
});

//dynamic user api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);

  console.log(req.params.id);
});

app.listen(port, () => {
  console.log("listening to port", port);
});

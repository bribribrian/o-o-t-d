const express = require("express");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = express();
const users = require("./routes/api/users");
const User = require('./models/User');

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // console.log(res);
  // const user = new User({
  //   username: 'test1',
  //   email: 'test1@test1.test1',
  //   password: 'test1password'
  // });
  // user.save();
  res.send("Welcome to Stylidex!");
});


app.use("/api/users", users);
app.listen(port, () => console.log(`Server is running on port ${port}`));


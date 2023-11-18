const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const { default: axios } = require("axios");
const multer = require('multer');  
const path = require('path');
const TodoModel = require("./models/Todo");
const UserModel = require("./models/Users");
const FeedbackModel = require("./models/Orders");
const ResponseModel = require("./models/Response");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/static', express.static(path.join(__dirname, './static')));



mongoose.connect('mongodb://127.0.0.1:27017/test')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, './static/'));
},
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

app.get("/get", (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get("/reviews", (req, res) => {
  ResponseModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post('/add', upload.single('image'), (req, res) => {
  const id = req.body.id;
  const task = req.body.task;
  const price = req.body.price;
  const relativeImagePath = req.file.filename;
  TodoModel.create({
    id: id,
    task: task,
    price: price,
    imagePath: relativeImagePath
  }).then(result => res.json(result))
  .catch(err => res.json(err))
})

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  UserModel.findById(userId)
      .then(user => {
          if (!user) {
              return res.status(404).json({ error: "User not found" });
          }
          res.json(user);
      })
      .catch(err => res.status(500).json({ error: err.message }));
});

// CREATE (add a new user)
app.post("/users", (req, res) => {
  const {
    id,
    firstName,
    lastName,
    addressLine,
    city,
    state,
    zip,
    country,
    nameCard,
    cardNumber,
    expiryDate
  } = req.body;

  UserModel.create({
    id,
    firstName,
    lastName,
    addressLine,
    city,
    state,
    zip,
    country,
    nameCard,
    cardNumber,
    expiryDate
  }).then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});


app.post("/feedbacks", (req, res) => {
  const {
    id,
    name,
    number,
    feedback,
  } = req.body;

  FeedbackModel.create({
    id,
    name,
    number,
    feedback,
  }).then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});


app.post("/reviews", (req, res) => {
  const {
    id,
    name,
    description,
    rating,
  } = req.body;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString() + ' ' + currentDate.toLocaleTimeString();

  ResponseModel.create({
    id,
    name,
    date: formattedDate,
    description,
    rating,
  }).then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});






app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
      const r = await axios.post(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "48997fae-2be7-409f-b8de-1da6a3322f2e" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001, () => {console.log("server run")});
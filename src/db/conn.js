const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/studentsRegistration')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/studentsRegistration", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// })
//   .then(() => {
//     console.log("Database connection successful!");
//   })
//   .catch((err) => {
//     console.error("Database connection error:", err);
//   });

    



// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/studentsRegistration", {
// }).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
// });


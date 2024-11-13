const express = require("express");
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");
require("dotenv").config();

//express app
const app = express();

app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//route
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests //only listen for requests when db is connected otherwise don't
    app.listen(process.env.PORT || 4000, () => {
      console.log(`DB connected & Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// //listen for requests
// app.listen(process.env.PORT || 4000, ()=>{
//     console.log(`Server running on port ${process.env.PORT}`);
// })

const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require('./routes')



//Express
const app = express();

// Variable Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// API Routes
app.use(routes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});

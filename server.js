/* Express setup */
var express = require("express");
var app = express();
var PORT = 3001;

/* Routing variables */
var apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes)



app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
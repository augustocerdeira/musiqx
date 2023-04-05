const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/musiqqxdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))

// const mongoose = require("mongoose");

// module.exports = musiqqxdb => {
//     mongoose
//     .connect(`mongodb://localhost/musiqqxdb`)
//     .then(() => console.log(`Successfully connected to musiqqxdb`))
//     .catch(err => console.log("mongoose connection failed: ", err));
// };
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection`, e);
});

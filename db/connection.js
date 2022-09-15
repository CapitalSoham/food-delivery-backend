const mongoose = require('mongoose');
const connectMongo = () => {
    mongoose.connect(process.env.mongoURI, { useNewUrlParser: true });
    mongoose.connection.on('error', (err) => {
     console.log(err);
     process.exit();
    });
    mongoose.connection.once('open', function() {
        console.log("Connection Successful!");
      });
   };
module.exports = connectMongo;
const mongoose = require("mongoose");

/*
todo: funcion to connect mongodb and fexthing data
*/

// url variable
var mongodbURI =
  "mongodb+srv://my_food:Myfood123@myfood.ldmgn55.mongodb.net/sample?retryWrites=true&w=majority";

// fucntion to feech data from mongodb
const mongoDB = async () => {
  await mongoose
    .connect(mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("Connected Successfully");

      // connecting with database collection
      const fetched_data = mongoose.connection.db.collection("food_items");

      // actual fecthing function
      fetched_data
        .find({})
        .toArray()
        .then((data) => {
          console.log("data fetched");
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

/* exporting funtion to /backend/index.js*/
module.exports = mongoDB;

// * end of funcion to connect mongodb and fexthing data

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
          const fetched_data1 =
            mongoose.connection.db.collection("food_categories");
          fetched_data1
            .find({})
            .toArray()
            .then((cat_data) => {
              // creating global variale so we can use all over the app
              global.food_items = data;
              global.food_categories = cat_data;
              // console.log(global.food_items);
              // console.log(global.food_categories);
            });
          console.log("data fetched");
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

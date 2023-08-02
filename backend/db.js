const mongoose = require("mongoose");

// const mongodbURI =
//   "mongodb+srv://my_food:Myfood123@myfood.ldmgn55.mongodb.net/";

// const mongoDB = () => {
//   mongoose.connect(mongodbURI, () => {
//     console.log("connected");
//   });
// };

// module.exports = mongoDB;

// import MongoStore from "./connect-mongo";

// * funcion to connect mongodb to vs code

const mongoDB = () => {
  mongoose
    .connect(
      "mongodb+srv://my_food:Myfood123@myfood.ldmgn55.mongodb.net/MyFoodretryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    .then(() => {
      console.log("Connected Successfully");
      const fetched_data = mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else {
          console.log("fetched successfully");
          console.log(data);
        }
      });
    })

    .catch((err) => {
      console.error(err);
    });
};

/* exporting funtion */
module.exports = mongoDB;

// * end of funcion to connect mongodb to vs code

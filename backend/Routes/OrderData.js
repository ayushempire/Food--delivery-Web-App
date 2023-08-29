const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");
const { OrderedBulkOperation } = require("mongodb");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { order_date: req.order_date });

  let eId = await Order.findOne({ email: req.body.eamil });
  console.log(data);
  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error);
      res.send("server error", error.message);
    }
  } else {
    try {
      await Order.findoneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error);
      res.send("server error", error.message);
    }
  }
});

module.exports = router;

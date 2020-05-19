const express = require("express");
const burger = require("../models/burger");

// let {selectAll, insertOne, updateOne, deleteOne } = require('../config/orm');
let router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let handleBarsObj = {
      burgers: data,
    };

    // console.log(hdbrObj);
    res.render("index", handleBarsObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne({ devoured: req.body.devoured }, condition, function (
    result
  ) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id=" + req.params.id;

  burger.deleteOne(condition, function (
    result
  ) {
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

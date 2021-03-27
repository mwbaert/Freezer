module.exports = app => {
    const items = require("../controllers/item.controller.js");

    var router = require("express").Router();

    // Create a new Item
    router.post("/", items.create);

    // Retrieve all Item
    router.get("/", items.findAll);

    // Retrieve a single Item with id
    router.get("/:id", items.findOne);

    // Update an Item with id
    router.put("/:id", items.update);

    // Delete an Item with id
    router.delete("/:id", items.delete);

    // Create a new Item
    router.delete("/", items.deleteAll);

    app.use('/api/items', router);
};
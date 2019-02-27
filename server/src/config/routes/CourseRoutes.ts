/**
 * Created by Dima on 27/02/2019.
 */


import express = require("express");
import CourseController = require("./../../controllers/CourseController");

var router = express.Router();

class CourseRoutes {
    private _controller: CourseController;

    constructor () {
        this._controller = new CourseController();
    }

    get routes () {
        var controller = this._controller;

        router.get("/courses", controller.retrieve);
        router.post("/courses", controller.create);
        router.put("/courses/:_id", controller.update);
        router.get("/courses/:_id", controller.findById);
        router.delete("/courses/:_id", controller.delete);

        return router;
    }
}

Object.seal(CourseRoutes);
export = CourseRoutes;

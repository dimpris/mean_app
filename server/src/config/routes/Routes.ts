/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import CourseRoutes = require('../routes/CourseRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);
        app.use("/", new CourseRoutes().routes);
        
        return app;
    }
}
export = Routes;
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import * as controllerClasses from './../../controllers';

let app = express();
let router = express.Router();
let controllerObjects = {};

class Routes {

    get routes() {
        for (let controllerName in controllerClasses) {
            controllerObjects[controllerName] = new controllerClasses[controllerName]();
            app.use('/', controllerObjects[controllerName].routes(router));
        }
        return app;
    }
}
export = Routes;

/**
 * Created by Dima on 27/02/2019.
 */

import DataAccess = require('../DataAccess');
import ICourseModel = require("./../../model/interfaces/CourseModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CourseSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            title : {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            image: {
                type: String,
                required: false
            },
            alias: {
                type: String,
                required: false
            }
        });

        return schema;
    }
}
var schema = mongooseConnection
    .model<ICourseModel>("Courses", CourseSchema.schema);

export = schema;

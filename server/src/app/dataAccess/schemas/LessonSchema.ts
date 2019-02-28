import DataAccess = require('../DataAccess');
import ILessonModel = require("../../model/interfaces/ILessonModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class LessonSchema {
    static get schema () {
        let schema =  mongoose.Schema({
            title : {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            }
        });

        return schema;
    }
}
export = mongooseConnection
    .model<ILessonModel>("Lessons", LessonSchema.schema);
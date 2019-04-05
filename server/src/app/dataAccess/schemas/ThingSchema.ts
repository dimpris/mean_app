import DataAccess = require('../DataAccess');
import IThingModel = require("../../model/interfaces/IThingModel");

let mongoose = DataAccess.mongooseInstance;
let mongooseConnection = DataAccess.mongooseConnection;

class ThingSchema {
    static get schema () {
        let schema =  mongoose.Schema({
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
            }
        });

        return schema;
    }
}
export = mongooseConnection
    .model<IThingModel>("Thing", ThingSchema.schema);
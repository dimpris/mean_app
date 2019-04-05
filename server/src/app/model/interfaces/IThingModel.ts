/**
 * Created by Dima on 28/02/2019.
 */
import mongoose = require("mongoose");

interface IThingModel extends mongoose.Document {
    title: string;
    description: string;
	image: string;
}
export = IThingModel;

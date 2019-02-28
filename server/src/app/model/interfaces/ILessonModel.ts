/**
 * Created by Dima on 28/02/2019.
 */
import mongoose = require("mongoose");

interface ILessonModel extends mongoose.Document {
    title: string;
    description: string;
}

export = ILessonModel;

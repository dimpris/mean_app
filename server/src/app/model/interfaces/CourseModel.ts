import mongoose = require("mongoose");

interface CourseModel extends mongoose.Document {
    title: string;
    description: string;
    image: string;
    alias: string;
}

export = CourseModel;

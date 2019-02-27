import mongoose = require("mongoose");

interface ICourseModel extends mongoose.Document {
    title: string;
    description: string;
    image: string;
    alias: string;
}

export = ICourseModel;

/**
 * Created by Dima on 28/02/2019.
 */
import express = require("express");
import LessonDataService = require("./../app/business/LessonDataService");
import CrudBaseController = require("./common/CrudBaseController");
import ILessonModel = require("../app/model/interfaces/ILessonModel");

export default class CourseController extends CrudBaseController<ILessonModel, LessonDataService> {
    constructor() {
        super(new LessonDataService(), 'lessons');
    }
}
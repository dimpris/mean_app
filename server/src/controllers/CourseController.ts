/**
 * Created by Dima on 27/02/2019.
 */



import express = require("express");
import CourseBusiness = require("./../app/business/CourseBusiness");
import CrudBaseController = require("./common/CrudBaseController");
import ICourseModel = require("../app/model/interfaces/ICourseModel");

export default class CourseController extends CrudBaseController<ICourseModel, CourseBusiness> {
    constructor() {
        super(new CourseBusiness(), 'courses');
    }
}

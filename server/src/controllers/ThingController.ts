/**
 * Created by Dima on 28/02/2019.
 */
import express = require("express");
import ThingDataService = require("./../app/business/ThingDataService");
import CrudBaseController = require("./common/CrudBaseController");
import IThingModel = require("../app/model/interfaces/IThingModel");

export default class CourseController extends CrudBaseController<IThingModel, ThingDataService> {
    constructor() {
        super(new ThingDataService(), 'Things');
    }
}
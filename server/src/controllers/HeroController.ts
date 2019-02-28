/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import HeroBusiness = require("./../app/business/HeroBusiness");
import CrudBaseController = require("./common/CrudBaseController");
import IHeroModel = require("./../app/model/interfaces/HeroModel");

export default class HeroController extends CrudBaseController<IHeroModel, HeroBusiness> {

    constructor() {
        super(new HeroBusiness(), 'heroes');
    }
}

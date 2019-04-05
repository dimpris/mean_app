import {BaseDataService} from "./common/BaseDataService";
import ThingRepository = require("../repository/ThingRepository");
import IThingModel = require("../model/interfaces/IThingModel");
class ThingDataService extends BaseDataService<IThingModel, ThingRepository> {
    constructor () {
        super(new ThingRepository());
    }
}
Object.seal(ThingDataService);
export = ThingDataService;

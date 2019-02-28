import {BaseDataService} from "./common/BaseDataService";
import LessonRepository = require("../repository/LessonRepository");
import ILessonModel = require("../model/interfaces/ILessonModel");
class LessonDataService extends BaseDataService<ILessonModel, LessonRepository> {
    constructor () {
        super(new LessonRepository());
    }
}
Object.seal(LessonDataService);
export = LessonDataService;

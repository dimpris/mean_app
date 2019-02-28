import RepositoryBase = require("./BaseRepository");
import ILessonModel = require("../model/interfaces/ILessonModel");
import LessonSchema = require("./../dataAccess/schemas/LessonSchema");
class LessonRepository extends RepositoryBase<ILessonModel> {
    constructor () {
        super(LessonSchema);
    }
}
Object.seal(LessonRepository);
export = LessonRepository;

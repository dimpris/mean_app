/**
 * Created by Dima on 27/02/2019.
 */


//import CourseModel = require("./../model/CourseModel");
import ICourseModel = require("../model/interfaces/ICourseModel");
import CourseSchema = require("./../dataAccess/schemas/CourseSchema");
import RepositoryBase = require("./BaseRepository");

class CourseRepository  extends RepositoryBase<ICourseModel> {
    constructor () {
        super(CourseSchema);
    }
}

Object.seal(CourseRepository);
export = CourseRepository;

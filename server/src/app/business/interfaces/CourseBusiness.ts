/**
 * Created by Dima on 27/02/2019.
 */

import BaseBusiness = require("./../BaseBusiness");
import ICourseModel = require("./../../model/interfaces/CourseModel");

interface CourseBusiness extends BaseBusiness<ICourseModel> {

}
export = CourseBusiness;

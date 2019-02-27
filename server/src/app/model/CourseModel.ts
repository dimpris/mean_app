/**
 * Created by Dima on 27/02/2019.
 */


import ICourseModel = require('./interfaces/ICourseModel');
import BaseModel = require('./common/BaseModel');

class CourseModel extends BaseModel<ICourseModel> {}
Object.seal(CourseModel);
export  = CourseModel;

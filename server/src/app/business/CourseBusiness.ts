/**
 * Created by Dima on 27/02/2019.
 */

import CourseRepository = require("./../repository/CourseRepository");
import ICourseBusiness = require("./interfaces/CourseBusiness");
import ICourseModel = require("./../model/interfaces/CourseModel");
import CourseModel = require("./../model/CourseModel");


class CourseBusiness implements ICourseBusiness {
    private _repository: CourseRepository;

    constructor () {
        this._repository = new CourseRepository();
    }

    create (item: ICourseModel, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }

    update (_id: string, item: ICourseModel, callback: (error: any, result: any) => void) {

        this._repository.findById(_id, (err, res) => {
            if (err) {
                callback(err, res);
            } else {
                this._repository.update(res._id, item, callback);
            }
        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._repository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: ICourseModel) => void) {
        this._repository.findById(_id, callback);
    }

}


Object.seal(CourseBusiness);
export = CourseBusiness;

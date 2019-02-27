/**
 * Created by Dima on 27/02/2019.
 */


import ICourseModel = require('./interfaces/ICourseModel');

class CourseModel {
    private _model: ICourseModel;

    constructor(model: ICourseModel) {
        this._model = model;
    }
    //
    // get title (): string {
    //     return this._model.title;
    // }
}
Object.seal(CourseModel);
export  = CourseModel;

/**
 * Created by Dima on 28/02/2019.
 */

class BaseModel<IModel> {
    private _model: IModel;

    constructor (model: IModel) {
        this._model = model;
    }
}
Object.seal(BaseModel);
export = BaseModel;

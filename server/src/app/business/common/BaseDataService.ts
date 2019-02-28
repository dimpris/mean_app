import BaseBusiness = require("../BaseBusiness");
import RepositoryBase = require("../../repository/BaseRepository");
import mongoose = require("mongoose");

export class BaseDataService <IModel extends mongoose.Document, IRepository extends RepositoryBase<IModel>> implements BaseBusiness <IModel>  {
    protected _repository: IRepository;

    constructor (repository: IRepository) {
        this._repository = repository;
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }
    create (item: IModel, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }
    update (_id: string, item: IModel, callback: (error: any, result: any) => void) {

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
    findById (_id: string, callback: (error: any, result: IModel) => void) {
        this._repository.findById(_id, callback);
    }
}

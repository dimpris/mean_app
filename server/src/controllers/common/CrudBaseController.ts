/**
 * Created by Dima on 28/02/2019.
 */
import express = require("express");
import IBaseController = require("./../common/IBaseController");
import IBaseBusiness = require('./../../app/business/BaseBusiness');
import IReadController = require('./../interfaces/ReadController');
import IWriteController = require('./../interfaces/WriteController');

function handleServiceResult (error: any, result: any) {
    if (error) {
        this.send({'error': 'error'});
    } else {
        this.send( result ? result : {'success': 'success'} );
    }
}

class CrudBaseController<IModel, BusinessService extends IBaseBusiness<IModel>> implements IReadController, IWriteController{
    private _service: BusinessService;
    private routeBase: string = '';

    constructor(service: BusinessService, routeBase: string) {
        this._service = service;
        this.routeBase = routeBase;
    }

    create(req: express.Request, res: express.Response): void {
        try {
            let model: IModel = <IModel>req.body;
            this._service.create(model, handleServiceResult.bind(res));
        } catch (e)  {
            res.send({'error': 'error in your request'});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            let model: IModel = <IModel>req.body;
            let _id: string = req.params._id;
            this._service.update(_id, model, handleServiceResult.bind(res));
        } catch (e)  {
            res.send({'error': 'error in your request'});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
            let _id: string = req.params._id;
            this._service.delete(_id, handleServiceResult.bind(res));
        } catch (e)  {
            res.send({'error': 'error in your request'});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            this._service.retrieve(handleServiceResult.bind(res));
        } catch (e)  {
            res.send({'error': 'error in your request'});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
            let _id: string = req.params._id;
            this._service.findById(_id, handleServiceResult.bind(res));
        } catch (e)  {
            res.send({'error': 'error in your request'});

        }
    }
    routes (router: express.Router): express.Router {
        router.get('/' + this.routeBase, this.retrieve.bind(this));
        router.post('/' + this.routeBase, this.create.bind(this));
        router.put('/' + this.routeBase + '/:_id', this.update.bind(this));
        router.get('/' + this.routeBase + '/:_id', this.findById.bind(this));
        router.delete('/' + this.routeBase + '/:_id', this.delete.bind(this));

        return router;
    }
}
Object.seal(CrudBaseController);
export = CrudBaseController;

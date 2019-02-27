/**
 * Created by Dima on 27/02/2019.
 */



import express = require("express");
import CourseBusiness = require("./../app/business/CourseBusiness");
import IBaseController = require("./BaseController");
import ICourseModel = require("../app/model/interfaces/ICourseModel");

class CourseController implements IBaseController <CourseBusiness> {
    create(req: express.Request, res: express.Response): void {
        try {

            var course: ICourseModel = <ICourseModel>req.body;
            var courseBusiness = new CourseBusiness();
            courseBusiness.create(course, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var course: ICourseModel = <ICourseModel>req.body;
            var _id: string = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.update(_id, course, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var courseBusiness = new CourseBusiness();
            courseBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var courseBusiness = new CourseBusiness();
            courseBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export  = CourseController;

/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Course} from "../models/course";

@Injectable()
export class CourseService {

    private coursesUrl = 'api/courses';  // URL to web api

    constructor(private http: Http) { }

    getCourses(): Promise<Course[]> {
        return this.http.get(this.coursesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getCourse(id: string) {
        return this.http.get(this.coursesUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(course: Course): Promise<Course>  {
        if (course._id) {
            return this.put(course);
        }
        return this.post(course);
    }

    private post(course: Course): Promise<Course> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.coursesUrl, JSON.stringify(course), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(course: Course) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.coursesUrl}/${course._id}`;

        return this.http
            .put(url, JSON.stringify(course), {headers: headers})
            .toPromise()
            .then(() => course)
            .catch(this.handleError);
    }

    delete(course: Course) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.coursesUrl}/${course._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
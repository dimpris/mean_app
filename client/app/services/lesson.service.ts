/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Lesson} from "../models/lesson";

@Injectable()
export class LessonService {

    private lessonsUrl = 'api/lessons';  // URL to web api

    constructor(private http: Http) { }
	
	getAllLessons(): Promise<Lesson[]> {
		return this.http.get(this.lessonsUrl)
			.toPromise()
            .then(response => response.json())
            .catch(this.handleError);
	}

/*
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
*/
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
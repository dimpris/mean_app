/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import { ActivatedRoute, Params } from '@angular/router';
import {CourseService} from "../../services/course.service";

@Component({
    selector: 'my-course-form',
    templateUrl: './app/components/courseForm/course-form.component.html'
})

export class CourseFormComponent implements OnInit {
    @Input() course: Course;
    newCourse = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newCourse = true;
                this.course = new Course();
            } else {
                this.newCourse = false;
                this.courseService.getCourse(id)
                    .then(course => this.course = course);
            }
        });
    }

    save() {
        this.courseService
            .save(this.course)
            .then(course => {
                this.course = course; // saved hero, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}
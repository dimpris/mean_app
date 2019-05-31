/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import {Lesson} from "../../models/lesson";
import { ActivatedRoute, Params } from '@angular/router';
import {CourseService} from "../../services/course.service";
import {LessonService} from "../../services/lesson.service";

@Component({
    selector: 'my-course-form',
    templateUrl: './app/components/courseForm/course-form.component.html'
})

export class CourseFormComponent implements OnInit {
    @Input() course: Course;
	allLessons: Lesson[];
	selectedLessonId: string = "";
    newCourse = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private courseService: CourseService,
        private lessonService: LessonService,
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
                    .then(course => {
						this.course = course;
						//console.log("COURSE", course);
					});
            }
			//get list of available lessons
			this.lessonService.getAllLessons()
				.then(lessons => {
					console.log("lessons", lessons);
					this.allLessons = lessons;
				});
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
	
	removeLesson(lessonId: string) {
		let index = this.course.lessons.findIndex(lesson => lesson._id == lessonId);
		this.course.lessons.splice(index, 1);
		//this.save();
	}
	
	addLesson() {
		if(this.selectedLessonId) {
			let newLesson = this.allLessons.find(lesson => lesson._id == this.selectedLessonId);
			this.course.lessons.push(newLesson);
		}
	}

    goBack() {
        window.history.back();
    }
}
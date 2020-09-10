/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import { Router } from '@angular/router';

@Component({
    selector: 'my-courses',
    templateUrl: './app/components/courses/courses.component.html'
})

export class CoursesComponent implements OnInit {

    courses: Course[];
    selectedCourse: Course;
    error: any;

    constructor(
        private router: Router,
        private courseService: CourseService) { }
		
    getCourses() {
        this.courseService.getCourses().then(courses => this.courses = courses);
    }
    ngOnInit() {
        this.getCourses();
    }
    onSelect(course: Course) { this.selectedCourse = course; }

    gotoDetail() {
        this.router.navigate(['/course', this.selectedCourse._id]);
    }

    addCourse() {
        this.selectedCourse = null;
        this.router.navigate(['/course', 'new']);
    }

    deleteCourse(course: Course, event: any) {
        event.stopPropagation();
        this.courseService
            .delete(course)
            .then(res => {
                this.courses = this.courses.filter(h => h !== course);
                if (this.selectedCourse === course) { this.selectedCourse = null; }
            })
            .catch(error => this.error = error);
    }
	
}

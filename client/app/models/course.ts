import {Lesson} from "../models/lesson";

export class Course {
    _id: string;
    title: string;
    description: string;
    image: string;
    alias: string;
	lessons: Array<Lesson>;
}
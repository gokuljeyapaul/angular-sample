import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component ({
    selector: 'courses',
    template: `
        Auto Grow Directive : <input type="text" autGrow/>
        <h4>{{ title }}</h4>
        <ul>
        <li *ngFor= "#course of courses">{{ course }}</li>
        </ul>
        `,
     providers: [CourseService],
     directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title: string = "Course titles";
    courses: Array<string>;
    
    constructor(courseService:CourseService) {
        this.courses = courseService.getCourses();
    }
}

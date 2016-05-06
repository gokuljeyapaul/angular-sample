import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: '<h2>Angular 2</h2><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }
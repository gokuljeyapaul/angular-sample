import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `<h4>{{ title }}</h4>
                <ul>
                <li *ngFor="#author of authors">{{ author }}</li>
                </ul>
              `,
     providers: [AuthorService]
})
export class AuthorsComponent {
    title: string = "Authors";
    authors: Array<string>;
    
    constructor(authorService:AuthorService) {
        this.authors = authorService.getAuthors();
    }
}
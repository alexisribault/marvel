import {Component, OnInit} from '@angular/core';

import {ComicService} from '../../comic.service';

@Component({
    templateUrl: './comic-list.component.html',
    providers: [ComicService]
})

export class ComicListComponent implements OnInit {
    private comics;

    constructor(private comicService: ComicService) {
    }

    ngOnInit() {
        this.comicService.getComics().subscribe(data => this.comics = data.data.results);
    }
}

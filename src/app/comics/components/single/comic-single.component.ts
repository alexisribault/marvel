import {Component, OnInit} from '@angular/core';
import {ComicService} from '../../comic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './comic-single.component.html',
    providers: [ComicService]
})

export class ComicSingleComponent implements OnInit {
    private sub: any;
    private comic: string[];

    constructor(private comicService: ComicService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {

            const id = params['id'];

            this.comicService.getComicById(id).subscribe(data => this.comic = data.data.results[0]);
        });
    }
}

import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../character.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './character-single.component.html',
    providers: [CharacterService]
})

export class CharacterSingleComponent implements OnInit {
    private sub: any;
    private character: string[];

    constructor(private characterService: CharacterService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {

            const id = params['id'];

            this.characterService.getCharacterById(id).subscribe(data => this.character = data.data.results[0]);
        });
    }
}

import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../character.service';

@Component({
    templateUrl: './character-list.component.html',
    providers: [CharacterService]
})

export class CharacterListComponent implements OnInit {
    private characters;

    constructor(private characterService: CharacterService) {
    }

    ngOnInit() {
        this.characterService.getCharacters().subscribe(data => this.characters = data.data.results);
    }
}

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment.prod';

import {Helper} from '../utilities/helper';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

    private marvelApiUrl;

    constructor(private http: Http, private helper: Helper) {
        this.marvelApiUrl = environment.marvelApiUrl;
    }

    public getCharacters() {
        return this.http.get(this.helper.api(this.marvelApiUrl + '/characters'))
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public getCharacterById(id) {
        return this.http.get(this.helper.api(this.marvelApiUrl + '/characters/' + id))
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}

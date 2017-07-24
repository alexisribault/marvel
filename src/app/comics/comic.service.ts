import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment.prod';

import {Helper} from '../utilities/helper';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ComicService {

    private marvelApiUrl;

    constructor(private http: Http, private helper: Helper) {
        this.marvelApiUrl = environment.marvelApiUrl;
    }

    public getComics() {
        return this.http.get(this.helper.api(this.marvelApiUrl + '/comics'))
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    public getComicById(id) {
        return this.http.get(this.helper.api(this.marvelApiUrl + '/comics/' + id))
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}

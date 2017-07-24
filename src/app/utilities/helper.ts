import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class Helper {

    private marvelPublicKey;

    constructor() {
        this.marvelPublicKey = environment.marvelPublicKey;
    }

    public api($url) {
        return $url + '?apikey=' + this.marvelPublicKey;
    }

}

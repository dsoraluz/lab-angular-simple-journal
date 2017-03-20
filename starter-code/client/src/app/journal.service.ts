import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JournalService {
  BASE_URL: string = "http://localhost:3000";

  constructor(private myHttp: Http) { }

  getEntries(){
    return this.myHttp.get(`${this.BASE_URL}/api/journal-entries`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

}

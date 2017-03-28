import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
// import {Observable} from 'rxjs/rx';

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

  getEntry(id){
    return this.myHttp.get(`${this.BASE_URL}/api/journal-entries/${id}`)
    .toPromise()
    .then(apiResult => apiResult.json())
  }

  createEntry(entryInfo){
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.myHttp.post(`${this.BASE_URL}/api/journal-entries`,
       entryInfo,
        options
      )
    .toPromise()
    .then(apiResult => apiResult.json())
  }

}

import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

  saveData(data: object){
    return this.http.post ('https://firstproj-d994b.firebaseio.com/people.json', data);
  }

  getData(){
    return this.http.get ('https://firstproj-d994b.firebaseio.com/people.json');

  }
}

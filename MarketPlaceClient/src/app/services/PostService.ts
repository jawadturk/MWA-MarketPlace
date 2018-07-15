import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: Http) { }

  checkEmailNotTaken(email: string) {

    return this.http
      .get('http://localhost:3000/api/email/' + email).pipe(
        
      );
  }


  addPost(obj) {


    return this.http
      .post('http://localhost:3000/api/add', obj).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res) {
    let body = res.json();
    return body || {};
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
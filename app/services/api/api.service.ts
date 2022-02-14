import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.xor.cl/tyaas/';

  constructor(private http: HttpClient) { }

  getHoroscopo(){
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });

  }
}

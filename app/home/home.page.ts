import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  signo: string;
  data: any;

  constructor(private api: ApiService, private router: Router) {
    this.signo = this.router.getCurrentNavigation().extras.queryParams.signo;
  }


  ngOnInit(){
    //almacenar la info data en una variable
    this.api.getHoroscopo().then((data: any) => {
      this.data= data.horoscopo[this.signo];
    });
  }
}

/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor(private router: Router) { }

  verSigno(signo: string){
    let nav: NavigationExtras = {
      queryParams : {
        'signo' : signo
      }
    };
    this.router.navigate(['home/'], nav);
  }

  ngOnInit() {
  }

}

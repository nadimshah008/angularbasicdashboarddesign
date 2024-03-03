import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSideNav:boolean=false;

  constructor(private commonServ:CommonService) { }

  ngOnInit(): void {
  }
  toggleSidenav(){
   this.openSideNav = !this.openSideNav;
    this.commonServ.toggleSideNav(this.openSideNav)
  }
}

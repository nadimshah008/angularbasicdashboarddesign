import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  toggleNav:boolean=false;
  constructor(private router:Router, private commonServ:CommonService) { }

  ngOnInit(): void {
    this.commonServ.data$.subscribe((data:any)=>{
      console.log("data",data);
      this.toggleNav = data;
    })
  }
  navigateTo(data:any){
    this.router.navigate([`home/${data}`])
  }
  logout(){
    this.router.navigate([''])
  }

}

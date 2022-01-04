import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";

import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private userService: UserService) { }
  userDetails:any;
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (res:any)=>{
        this.userDetails=res['user'];
      },
      err=>{ console.log(err)}
    )
  }

  // onLogout(){
  //   this.userService.deleteToken();
  //   this.router.navigate(['/signin']);
  // }

}

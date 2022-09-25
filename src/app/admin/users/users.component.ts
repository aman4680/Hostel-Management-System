import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { AdminService } from '../admin.service';

@Component({
  selector: 'pm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;

  userDetails = new FormGroup({
    newUsername : new FormControl('',[Validators.required]),
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    mobileNumber : new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email : new FormControl('',[Validators.required, Validators.email])
  });

  users: any[];

  constructor(private adminService: AdminService) {
    this.adminService.getAllUsers().subscribe((users) => { this.users = users; });
  }

  ngOnInit(): void {
  }

  removeUser() {
    // console.log(this.userDetails.length);
    // const user = this.users.filter(this.);
    // console.log(this.user);
    // if(confirm("Are you sure to delete this user " + this.user)) {
    //   this.adminService.removeUser(this.user)
    //   .subscribe((msg) => {
    //       alert(msg);
    //       window.location.reload();
    //   }
    //   );
    // }
  }

}

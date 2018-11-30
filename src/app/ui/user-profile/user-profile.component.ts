import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

  constructor(public auth: AuthService, private router: Router, ) { }

  


  logout() {
    this.auth.signOut();
  }
  // editDetails() {
  //   this.router.navigate(['/boards-details/']);
  // }
}

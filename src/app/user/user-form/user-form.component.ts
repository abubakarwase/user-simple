import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AppConstants } from 'src/app/utils/constants';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() userDetail: User = {
    username: '',
    email: '',
    password: '',
  };
  @Output() createUser = new EventEmitter<{}>();
  @Output() updateUser = new EventEmitter<{}>();
  userId: string;
  isFormSubmitted: Boolean = false;
  loading: boolean = false;

  isSixCharacter: boolean = false;
  isSpecialCharacter: boolean = false;
  isOneUpperCase: boolean = false;
  isOneLowerCase: boolean = false;
  isNumber: boolean = false;

  emailValidator = AppConstants.EMAIL_PATTERN;
  PASSWORD_VALIDATOR = AppConstants.PASSWORD_PATTERN;
  required_field_Error = AppConstants.DEFAULT_REQUIRED_FIELD_ERROR;
  incorrect_email_Error = AppConstants.INCORRECT_EMAIL_ADDRESS;
  SIX_COUNT_PATTERN = AppConstants.SIX_COUNT_PATTERN;
  A_SPECIAL_CHARACTER = AppConstants.A_SPECIAL_CHARACTER;
  A_UPPERCASE = AppConstants.A_UPPERCASE;
  A_LOWERCASE = AppConstants.A_LOWERCASE;
  A_NUMBER = AppConstants.A_NUMBER;

  constructor(private _route: ActivatedRoute, private toastr: ToastrService) {
    this.userId = this._route.snapshot.params['id'];
  }

  ngOnInit() {}

  formSubmitted() {
    try {
      this.isFormSubmitted = true;
      this.loading = true;

      this.userDetail.username = this.userDetail.username.trim();
      this.userDetail.email = this.userDetail.email.toLowerCase().trim();
      this.userDetail.password = this.userDetail.password.trim();

      // validating user data
      if (
        this.userDetail.username.length === 0 ||
        !this.userDetail.email.match(this.emailValidator) ||
        !this.userDetail.password.match(this.PASSWORD_VALIDATOR)
      ) {
        // if wrong then stop user from adding it to the local storage
        this.toastr.error('Some fields might have incorrect data', 'Error');
      } else {
        // here we are re-using form for the create and update user based on the id
        this.userId
          ? this.updateUser.emit(this.userDetail)
          : this.createUser.emit(this.userDetail);
      }

      this.loading = false;
    } catch (err: any) {
      this.toastr.error(err.message, 'Error');
    }
  }
}

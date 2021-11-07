import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user.interface';
import { confirmCancelButton } from 'src/app/utils/sweet-alerts';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponenet implements OnInit {
  constructor() {}

  ngOnInit() {}
}

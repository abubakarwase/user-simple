import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';

import { UserRoutingModule } from './user-routing.module';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    UserTableComponent,
    UserCreateComponent,
    UserFormComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UsersModule {}

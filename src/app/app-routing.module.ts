import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponenet } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UsersModule),
  },
  {
    path: '**',
    component: ErrorComponenet,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

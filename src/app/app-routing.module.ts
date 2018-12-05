import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { AuthCompanyGuardService } from "./core/auth-company-guard.service";
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';

import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';
import { BoardsComponent } from './crud/boards/boards.component';
import { BoardsDetailComponent } from './crud/boards-detail/boards-detail.component';
import { BoardsCreateComponent } from './crud/boards-create/boards-create.component';
import { BoardsEditComponent } from "./crud/boards-edit/boards-edit.component";
import { CompanyloginComponent } from './ui/companylogin/companylogin.component';
import { CompanyformComponent } from './ui/companyform/companyform.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  // { path: 'boards', component: BoardsComponent, canActivate: [AuthGuard], data: { title: 'Boards List' } },
  { path: 'boards-details/:id', component: BoardsDetailComponent,canActivate: [AuthCompanyGuardService],  data: { title: 'Boards Details' } },
  { path: 'boards-create', component: BoardsCreateComponent,canActivate: [AuthGuard], data: { title: 'Create Boards' } },
  { path: 'boards-edit/:id', component: BoardsEditComponent,canActivate: [AuthGuard], data: { title: 'Edit Boards' } },
  // { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'ssr', component: SsrPageComponent },
  { path: 'login-company', component: CompanyloginComponent}

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

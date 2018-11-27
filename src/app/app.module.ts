import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

// Firestarter App Modules
import { CoreModule } from './core/core.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/ui.module';
import { NotesModule } from './notes/notes.module';

// @angular/fire/ Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import {BoardsComponent} from '../app/crud/boards/boards.component'
import { BoardsDetailComponent } from '../app/crud/boards-detail/boards-detail.component';
import { BoardsCreateComponent } from '../app/crud/boards-create/boards-create.component';
import { BoardsEditComponent } from '../app/crud/boards-edit/boards-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// IMPORTANT
// Add your own project credentials to environments/*.ts

// const appRoutes: Routes = [
//   {
//     path: 'boards',
//     component: BoardsComponent,
//     data: { title: 'Boards List' }
//   },
//   {
//     path: 'boards-details/:id',
//     component: BoardsDetailComponent,
//     data: { title: 'Boards Details' }
//   },
//   {
//     path: 'boards-create',
//     component: BoardsCreateComponent,
//     data: { title: 'Create Boards' }
//   },
//   {
//     path: 'boards-edit/:id',
//     component: BoardsEditComponent,
//     data: { title: 'Edit Boards' }
//   },
//   { path: '',
//     redirectTo: '/boards',
//     pathMatch: 'full'
//   }
// ];


@NgModule({
  declarations: [AppComponent, BoardsComponent,
    BoardsDetailComponent,
    BoardsCreateComponent,
    BoardsEditComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    UiModule,
    NotesModule,
    UploadsModule,
    AngularFireModule.initializeApp(environment.firebase, 'firestarter'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

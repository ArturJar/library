import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { UserModule, UserListComponent } from './user/user.module';
import { BookModule, BookListComponent } from './book/book.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const APPROUTES: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'books', component: BookListComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTES),
    UserModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

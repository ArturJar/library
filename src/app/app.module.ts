import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBooksService } from './book/book.mock';

import { UserModule, UserListComponent } from './user/user.module';
import { BookModule, BookListComponent, BookDetailsComponent } from './book/book.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APPROUTES: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTES),
    UserModule,
    BookModule,
    InMemoryWebApiModule.forRoot(InMemoryBooksService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

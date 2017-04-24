import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './book.mock';
import * as Enumerable from 'linq';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  getBook(id: number): Promise<Book> {
    return Promise.resolve(Enumerable.from(BOOKS).first(item => item.id === id));
  }
}

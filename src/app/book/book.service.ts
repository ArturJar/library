import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './book.mock';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }
}

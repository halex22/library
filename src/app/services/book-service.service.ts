import { Injectable } from '@angular/core';
import { demoBooks } from './data';
import { type Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  protected books: Book[] = demoBooks

  constructor() {}

  get bookList() {
    return this.books
  }

  getBookById(idToFind: number): Book | undefined {
    return this.books.find(book => book.id === idToFind)
  }

}

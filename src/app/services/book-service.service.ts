import { Injectable } from '@angular/core';
import { demoBooks } from './data';
import { type Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private STORAGE_KEY = 'savedBooks'
  protected books: Book[] = []

  constructor() {}

  getBookList() {
    if (this.books.length) return this.books
    const userBooks = this.loadBooksFromStorage()
    this.books = userBooks ? userBooks : demoBooks
    return this.books
  }

  saveBooksToStorage(): void {
    console.log('books that will be save', this.books)
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.books))
  }

  loadBooksFromStorage(): Book[] | null {
    const books = localStorage.getItem(this.STORAGE_KEY)
    return  books ? JSON.parse(books) : null
  }

  getBookById(idToFind: number): Book | undefined {
    return this.getBookList().find(book => book.id === idToFind)
  }

  addBook(bookToAdd: Book) {
    this.books = [...this.books, bookToAdd]
    console.log(this.books)
    this.saveBooksToStorage()
  }

}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookService } from './services/book-service.service';
import { type Book } from './book';
import { BookCardComponent } from './book/book-card/book-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private bookService = inject(BookService)
  books: Book[] 
  
  constructor() {
    this.books = this.bookService.bookList
  }


}
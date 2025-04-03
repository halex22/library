import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service.service';
import { Book } from '../../book';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-booklist',
  imports: [CommonModule, BookCardComponent],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss'
})
export class BooklistComponent {
  private bookService = inject(BookService)
  books: Book[] 
  
  constructor() {
    this.books = this.bookService.bookList
  }
}

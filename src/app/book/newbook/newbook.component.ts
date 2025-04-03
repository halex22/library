import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { newBookForm } from './form';
import { type Book, type Author } from '../../book';
import { BookService } from '../../services/book-service.service';

@Component({
  selector: 'app-newbook',
  imports: [ReactiveFormsModule],
  templateUrl: './newbook.component.html',
  styleUrl: './newbook.component.scss'
})
export class NewbookComponent {

  bookForm = newBookForm
  private bookService: BookService = inject(BookService) 
  constructor () {}

  onSubmit() {

    const author: Author = {
      name: this.bookForm.value.author ?? 'N/A'
    }

    const book: Book = {
      id: Math.random(),
      title: this.bookForm.value.title ?? 'N/A',
      authors: [author],
      summaries: [this.bookForm.value.summary ?? 'N/A'],
      "image/jpeg": ''
    }

    this.bookService.addBook(book)
  }
}

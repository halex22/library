import { Component, inject } from '@angular/core';
import { type Book } from '../../book';
import { BookService } from '../../services/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detail-book',
  imports: [AuthorCardComponent, NgFor],
  templateUrl: './detail-book.component.html',
  styleUrl: './detail-book.component.scss'
})
export class DetailBookComponent {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  book: Book | undefined

  constructor () {
    const id = Number(this.route.snapshot.params['bookId'])
    this.book = this.bookService.getBookById(id)
  }
}

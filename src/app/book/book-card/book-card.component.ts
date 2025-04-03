import { Component, Input } from '@angular/core';
import { type Book } from '../../book';
import { NgFor } from '@angular/common';
import { AuthorCardComponent } from '../author-card/author-card.component';

@Component({
  selector: 'app-book-card',
  imports: [NgFor, AuthorCardComponent],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book!: Book
}

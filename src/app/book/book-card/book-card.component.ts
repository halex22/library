import { Component, Input } from '@angular/core';
import { type Book } from '../../book';
import { NgFor } from '@angular/common';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [NgFor, AuthorCardComponent, RouterModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book!: Book
}

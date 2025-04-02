import { Component } from '@angular/core';
import { type Author } from '../../book';
import { Input } from '@angular/core';

@Component({
  selector: 'app-author-card',
  imports: [],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.scss'
})
export class AuthorCardComponent {
  @Input() author!: Author
}

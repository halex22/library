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
  @Input({required: true}) author!: Author

  get lifeSpan(){

    if (this.author.death_year && this.author.birth_year) {
      return this.author.death_year - this.author.birth_year
    }
    return undefined

  }
}

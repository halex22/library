import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  constructor() {
  }


}
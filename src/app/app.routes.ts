import { Routes } from '@angular/router';
import { BooklistComponent } from './book/booklist/booklist.component';
import { DetailBookComponent } from './book/detail-book/detail-book.component';
import { NewbookComponent } from './book/newbook/newbook.component';

export const routes: Routes = [
  {
    path:"", 
    component: BooklistComponent,
    title: "home page",
  },
  {
    path:"detail/:id",
    component: DetailBookComponent,
    title: "dettaglio",
  },
  {
    path:"new-book",
    component: NewbookComponent,
    title: "nuovo libro",
  }

];

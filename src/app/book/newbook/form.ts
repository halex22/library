import { FormControl, FormGroup, Validators } from '@angular/forms';


export const newBookForm = new FormGroup({
  title: new FormControl('', [
    Validators.required
  ]),
  author: new FormControl('', [
    Validators.required
  ]),
  summary: new FormControl('', [
    Validators.required
  ])
})

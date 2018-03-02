import { Component } from '@angular/core';


//  This is required for Model Based Form
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  userForm = new FormGroup({

    name: new FormControl(null,
      [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),


    email: new FormControl(),
    address: new FormGroup({

      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl()

    }),


  })


  SaveUserDetail() {

    console.log(this.userForm.value);

  }




}

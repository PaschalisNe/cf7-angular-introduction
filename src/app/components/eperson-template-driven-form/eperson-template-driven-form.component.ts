import { Component, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, CommonModule],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent {
  @ViewChild('eForm', { static: false }) myform: NgForm | undefined;
  @Output() person = new EventEmitter<EPerson>();
  
  onSubmit(value: EPerson) {
    console.log(value);
    console.log(this.myform);
    console.log(this.myform?.form.get('givenName')?.value);
    this.person.emit(value);
  }

  onSetValue() {
    this.myform?.setValue({
    givenName: "John",
    surName: "Doe",
    age: 30,
    email: "john@aueb.gr",
    education: "Master's degree"
  });
  this.myform?.form.controls["givenName"].setValue("Milos")
  }
}

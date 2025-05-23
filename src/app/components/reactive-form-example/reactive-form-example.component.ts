import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-reactive-form-example',
  imports: [SimpleDatatableComponent, PersonTableComponent, EpersonReactiveFormComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})

export class ReactiveFormExampleComponent {
  currentPerson: EPerson | undefined
  persons: EPerson[] = []
  
  onPerson(data: EPerson) {
    // console.log("Father", data)
    this.currentPerson = data
    // this.persons.push(data)
    this.persons = [...this.persons, data]     // create new array, fixing the one above
    // console.log('Father', this.persons)
  }
}

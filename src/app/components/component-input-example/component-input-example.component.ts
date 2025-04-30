import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Chistou',
    surName: 'Panos',
    age: 55,
    email: 'ch@aueb.gr',
    address: 'New York, US'
  }

  person1: Person = {
    givenName: 'Gianou',
    surName: 'Kostas',
    age: 45,
    email: 'gianou@aueb.gr',
    address: 'Larnaca, Cyprus'
  }
}

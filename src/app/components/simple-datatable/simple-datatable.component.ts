import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';


@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
@Input() data: EPerson[] | undefined;
@Input() myData: boolean = true;       // only for display purposes, not actual use 
@Output() personClicked = new EventEmitter<EPerson>()

epersonsData: EPerson[] = []          // αντικατεστησαto your loved one | undifined με = []

ngOnChanges(changes: SimpleChanges) {
  if(changes['data'] && this.data) {
  this.epersonsData = this.data
}
if(changes['myData']) {
  // this.myFunction()
}
}

sortOrder = {
  givenName: 'none',
  surName: 'none',
  age: 'none',
  email: 'none',
  education: 'none'
}

sortData(sortKey: keyof EPerson): void {
  // console.log(sortKey);
  // this.epersonsData = this.data

  if(this.sortOrder[sortKey] === 'asc') {
    this.sortOrder[sortKey] = 'desc'
    this.epersonsData = sortBy(this.data, sortKey).reverse();
  
  } else {
    this.sortOrder[sortKey] = 'asc';
    this.epersonsData = sortBy(this.data, sortKey);
  }

  for(let key in this.sortOrder) {
    if(key !== sortKey) {
      this.sortOrder[key as keyof EPerson] = 'none'
    }
  }
  console.log('Simple DataTable',this.data)
}

sortSign(sortKey: keyof EPerson) : string {
  if (this.sortOrder[sortKey] === 'asc') return '\u2191'
  else if(this.sortOrder[sortKey] === 'desc') return '\u2193'
  else return '';
}

onPersonClicked(person: EPerson) {
  console.log('Person>>', person);
  this.personClicked.emit(person)
}
}

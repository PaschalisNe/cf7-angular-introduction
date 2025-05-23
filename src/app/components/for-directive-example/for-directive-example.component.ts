import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Neill",
      "surName": "McKelvey",
      "email": "nmckelvey0@bbc.co.uk",
      "age": 1,
      "address": "17th Floor"
    }, {
      "givenName": "Cathie",
      "surName": "Joutapaitis",
      "email": "cjoutapaitis1@barnesandnoble.com",
      "age": 2,
      "address": "Apt 1082"
    }, {
      "givenName": "Mattheus",
      "surName": "Saggers",
      "email": "msaggers2@sitemeter.com",
      "age": 3,
      "address": "Room 1748"
    }, {
      "givenName": "Anastasie",
      "surName": "Ellcock",
      "email": "aellcock3@nationalgeographic.com",
      "age": 4,
      "address": "Room 1883"
    }, {
      "givenName": "Maxine",
      "surName": "Huggen",
      "email": "mhuggen4@nbcnews.com",
      "age": 5,
      "address": "Room 290"
    }, {
      "givenName": "Golda",
      "surName": "Plumstead",
      "email": "gplumstead5@stumbleupon.com",
      "age": 6,
      "address": "PO Box 5681"
    }, {
      "givenName": "Dareen",
      "surName": "Cino",
      "email": "dcino6@telegraph.co.uk",
      "age": 7,
      "address": "Apt 1"
    }, {
      "givenName": "Sheff",
      "surName": "Waller-Bridge",
      "email": "swallerbridge7@buzzfeed.com",
      "age": 8,
      "address": "7th Floor"
    }, {
      "givenName": "Selie",
      "surName": "Bayford",
      "email": "sbayford8@hubpages.com",
      "age": 9,
      "address": "8th Floor"
    }, {
      "givenName": "Clevey",
      "surName": "Sandbrook",
      "email": "csandbrook9@smh.com.au",
      "age": 10,
      "address": "PO Box 30478"
    }, {
      "givenName": "Sherrie",
      "surName": "Cockroft",
      "email": "scockrofta@tripadvisor.com",
      "age": 11,
      "address": "3rd Floor"
    }, {
      "givenName": "Cordi",
      "surName": "Peattie",
      "email": "cpeattieb@comsenz.com",
      "age": 12,
      "address": "Suite 80"
    }, {
      "givenName": "Koren",
      "surName": "Lodford",
      "email": "klodfordc@unesco.org",
      "age": 13,
      "address": "Room 356"
    }, {
      "givenName": "Tim",
      "surName": "Lendon",
      "email": "tlendond@twitter.com",
      "age": 14,
      "address": "PO Box 69233"
    }, {
      "givenName": "Ermentrude",
      "surName": "Alen",
      "email": "ealene@sbwire.com",
      "age": 15,
      "address": "PO Box 71190"
    }, {
      "givenName": "Delilah",
      "surName": "Barrass",
      "email": "dbarrassf@opensource.org",
      "age": 16,
      "address": "PO Box 54030"
    }, {
      "givenName": "Marna",
      "surName": "Linscott",
      "email": "mlinscottg@msn.com",
      "age": 17,
      "address": "Room 1788"
    }, {
      "givenName": "Rodolfo",
      "surName": "Dawson",
      "email": "rdawsonh@sohu.com",
      "age": 18,
      "address": "Room 1651"
    }, {
      "givenName": "Amii",
      "surName": "Mordey",
      "email": "amordeyi@hc360.com",
      "age": 19,
      "address": "Room 1166"
    }, {
      "givenName": "Grissel",
      "surName": "Auckland",
      "email": "gaucklandj@nydailynews.com",
      "age": 20,
      "address": "PO Box 55300"
    }
  ]
}

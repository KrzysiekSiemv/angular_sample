import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  people: Person[] = []
  constructor(private personService: PersonService){}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.personService.getPeople().subscribe(people => this.people = people);
  }
}

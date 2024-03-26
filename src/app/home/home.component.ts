import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Location } from '@angular/common';
import { Person } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  person: Person | undefined;

  constructor(private route: ActivatedRoute, private personService: PersonService, private location: Location){}
  ngOnInit(){
    this.getPerson();
  }

  getPerson() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPerson(id).subscribe(person => this.person = person)
  }
}
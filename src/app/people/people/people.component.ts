import { Component, OnInit } from "@angular/core";
import { PeopleService } from "src/app/services/people.service";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  people: Array<any>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }
}

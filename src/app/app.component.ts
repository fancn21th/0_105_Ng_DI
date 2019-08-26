import { Component } from "@angular/core";
import { PeopleService } from "./services/people.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  people: Array<any>;

  constructor(private peopleService: PeopleService) {
    this.people = peopleService.getPeople();
  }
}

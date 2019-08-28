import { Component, OnInit, SkipSelf } from "@angular/core";
import { PeopleService } from "src/app/services/people.service";
import { AnotherPeopleService } from "src/app/services/another-people.service";

@Component({
  selector: "app-another-people",
  templateUrl: "./another-people.component.html",
  styleUrls: ["./another-people.component.css"],
  providers: [
    {
      provide: PeopleService,
      useClass: AnotherPeopleService
    }
  ]
})
export class AnotherPeopleComponent implements OnInit {
  people: Array<any>;

  constructor(@SkipSelf() private peopleService: PeopleService) {}

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }
}

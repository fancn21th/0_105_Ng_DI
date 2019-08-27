import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PeopleService } from "src/app/services/people.service";

@Component({
  selector: "app-people-item",
  templateUrl: "./people-item.component.html",
  styleUrls: ["./people-item.component.css"]
})
export class PeopleItemComponent implements OnInit {
  @Input() item: any;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {}

  updatePeopleName(value) {
    this.peopleService.updatePeopleById(this.item.id, value);
  }
}

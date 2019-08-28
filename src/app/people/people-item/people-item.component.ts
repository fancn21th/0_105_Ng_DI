import { Component, OnInit, Input, Host, Optional } from "@angular/core";
import { PeopleService } from "src/app/services/people.service";
import { LoggerService } from "src/app/services/logger.service";

@Component({
  selector: "app-people-item",
  templateUrl: "./people-item.component.html",
  styleUrls: ["./people-item.component.css"]
})
export class PeopleItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    private peopleService: PeopleService,
    // @Optional() private logger: LoggerService
    @Host() @Optional() private logger: LoggerService
  ) {}

  ngOnInit() {}

  updatePeopleName(value) {
    this.peopleService.updatePeopleById(this.item.id, value);
    if (this.logger) this.logger.log(this.item.name + " has been updated");
    else console.log("sorry no logger service available");
  }
}

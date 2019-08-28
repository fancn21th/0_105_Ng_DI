import { Injectable } from "@angular/core";
import { PeopleService } from "./people.service";

@Injectable({
  providedIn: "root"
})
export class AnotherPeopleService extends PeopleService {
  getPeople() {
    const people = super.getPeople();
    people.push({
      id: 3,
      name: "Kevin"
    });
    return people;
  }
}

import { Injectable } from "@angular/core";
import { AwesomePeopleService } from "./people.service";

@Injectable({
  providedIn: "root"
})
export class AnotherPeopleService extends AwesomePeopleService {
  getPeople() {
    const people = super.getPeople();
    people.push({
      id: 3,
      name: "Kevin"
    });
    return people;
  }
}

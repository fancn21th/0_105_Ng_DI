import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  people: Array<any> = [{ id: 1, name: "Joe" }, { id: 2, name: "Alex" }];

  constructor() {}

  getPeople() {
    return this.people;
  }

  updatePeopleById(id, value) {
    this.people.find(item => item.id === id).name = value;
  }
}

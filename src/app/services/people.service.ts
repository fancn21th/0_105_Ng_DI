import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export abstract class PeopleService {
  abstract getPeople();
  abstract updatePeopleById(id, value);
}

export class AwesomePeopleService extends PeopleService {
  people: Array<any> = [{ id: 1, name: "Joe" }, { id: 2, name: "Alex" }];

  getPeople() {
    return this.people;
  }

  updatePeopleById(id, value) {
    this.people.find(item => item.id === id).name = value;
  }
}

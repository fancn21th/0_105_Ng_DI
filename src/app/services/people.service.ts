import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor() {}

  getPeople() {
    return [{ name: "Joe" }, { name: "Alex" }];
  }
}

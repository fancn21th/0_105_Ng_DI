import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConsoleWriterService {
  constructor() {}

  write(msg: String) {
    console.log(msg);
  }
}

import { Injectable } from "@angular/core";
import { ConsoleWriterService } from "./console-writer.service";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  constructor(
    private isEnabled: boolean,
    private writer: ConsoleWriterService
  ) {}

  log(msg: string) {
    if (this.isEnabled) this.writer.write(msg);
  }
}

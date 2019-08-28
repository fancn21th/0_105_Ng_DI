import { Injectable } from "@angular/core";
import { ConsoleWriterService } from "./console-writer.service";

export const simpleLogger = {
  log(msg: String) {
    console.log(`I'm a simple logger: ${msg}`);
  }
};

export const loggerFactory = (writer: ConsoleWriterService) => {
  return new LoggerService(true, writer);
};

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

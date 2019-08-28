import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PeopleService } from "./services/people.service";
import { PeopleModule } from "./people/people.module";
import { LoggerService } from "./services/logger.service";
// import { NewLoggerService } from "./services/new-logger.service";
import { ConsoleWriterService } from "./services/console-writer.service";
import { AnotherPeopleService } from "./services/another-people.service";

const simpleLogger = {
  log(msg: String) {
    console.log(`I'm a simple logger: ${msg}`);
  }
};

const loggerFactory = (writer: ConsoleWriterService) => {
  return new LoggerService(true, writer);
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule],
  providers: [
    PeopleService,
    {
      provide: LoggerService,
      // useExisting: NewLoggerService
      // useValue: simpleLogger
      useFactory: loggerFactory,
      deps: [ConsoleWriterService]
    },
    AnotherPeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

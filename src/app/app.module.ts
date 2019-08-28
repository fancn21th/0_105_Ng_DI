import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PeopleService, AwesomePeopleService } from "./services/people.service";
import { PeopleModule } from "./people/people.module";
import { LoggerService, loggerFactory } from "./services/logger.service";
// import { NewLoggerService } from "./services/new-logger.service";
import { ConsoleWriterService } from "./services/console-writer.service";
import { AnotherPeopleService } from "./services/another-people.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule],
  providers: [
    {
      provide: PeopleService,
      useClass: AwesomePeopleService
    },
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

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PeopleService } from "./services/people.service";
import { PeopleModule } from "./people/people.module";
import { LoggerService } from "./services/logger.service";
import { NewLoggerService } from "./services/new-logger.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule],
  providers: [
    PeopleService,
    {
      provide: LoggerService,
      useExisting: NewLoggerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

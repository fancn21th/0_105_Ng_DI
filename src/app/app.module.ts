import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PeopleService } from "./services/people.service";
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}

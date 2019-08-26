import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PeopleService } from "./services/people.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}

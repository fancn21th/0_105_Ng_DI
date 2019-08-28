import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PeopleComponent } from "./people/people.component";
import { PeopleItemComponent } from "./people-item/people-item.component";
import { PeopleItemEditComponent } from "./people-item-edit/people-item-edit.component";
import { AnotherPeopleComponent } from "./another-people/another-people.component";
@NgModule({
  declarations: [
    PeopleComponent,
    PeopleItemComponent,
    PeopleItemEditComponent,
    AnotherPeopleComponent
  ],
  imports: [CommonModule],
  exports: [
    PeopleComponent,
    PeopleItemComponent,
    PeopleItemEditComponent,
    AnotherPeopleComponent
  ]
})
export class PeopleModule {}

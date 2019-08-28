import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PeopleComponent } from "./people/people.component";
import { PeopleItemComponent } from "./people-item/people-item.component";
import { PeopleItemEditComponent } from "./people-item-edit/people-item-edit.component";
@NgModule({
  declarations: [PeopleComponent, PeopleItemComponent, PeopleItemEditComponent],
  imports: [CommonModule],
  exports: [PeopleComponent, PeopleItemComponent, PeopleItemEditComponent]
})
export class PeopleModule {}

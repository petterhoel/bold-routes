import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PartOneComponent} from "./part-one.component";
import {PartTwoComponent} from "./part-two.component";
import {PartThreeComponent} from "./part-three.component";
import {SectionComponent} from "./section.component";

const children: Routes = [
  {
    path: '',
    redirectTo: `/section/one/42`,
    pathMatch: `full`
  },
  {
    path: `one/:jaja`,
    component: PartOneComponent
  },
  {
    path: `two/:jaja`,
    component: PartTwoComponent
  },
  {
    path: `three/:jaja`,
    component: PartThreeComponent
  }
];
const routes: Routes = [{
  path: '',
  component: SectionComponent,
  children
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }

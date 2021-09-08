import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { PartOneComponent } from './part-one.component';
import { PartTwoComponent } from './part-two.component';
import { PartThreeComponent } from './part-three.component';

@NgModule({
  declarations: [
    SectionComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule
  ]
})
export class SectionModule { }

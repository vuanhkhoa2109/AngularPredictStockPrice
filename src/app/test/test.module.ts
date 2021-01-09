import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { NgxsModule } from '@ngxs/store';
import { TestState } from './store/states/test.states';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    NgxsModule.forFeature([TestState]),
    FormsModule,
    NbLayoutModule
  ]
})
export class TestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTestCardComponent } from './ui-test-card/ui-test-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [UiTestCardComponent],
  exports: [UiTestCardComponent]
})
export class TestModule { }

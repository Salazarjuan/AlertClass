import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SqrtPipe} from "../pipes/SqrtPipe";
import { FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NameComponentComponent } from './name-component/name-component.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    NameComponentComponent,
    FatherComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

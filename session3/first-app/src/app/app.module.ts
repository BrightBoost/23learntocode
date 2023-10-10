import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { AnotherExampleComponent } from './another-example/another-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    AnotherExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

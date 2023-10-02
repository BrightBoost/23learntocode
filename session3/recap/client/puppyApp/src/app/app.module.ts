import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import { PuppyDetailsComponent } from './puppy-details/puppy-details.component';
import { AddPuppyComponent } from './add-puppy/add-puppy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { "path": "puppyList", "component": PuppyListComponent },
  { "path": "addPuppy", "component": AddPuppyComponent },
  { "path": "puppyDetails", "component": PuppyDetailsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    PuppyListComponent,
    PuppyDetailsComponent,
    AddPuppyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExampleInterpolationComponent } from './example-interpolation/example-interpolation.component';
import { ExamplePropertyBindingComponent } from './example-property-binding/example-property-binding.component';
import { ExampleTwoWayBindingComponent } from './example-two-way-binding/example-two-way-binding.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "contact", component: ContactUsComponent },
  { path: "example-interpolation", component: ExampleInterpolationComponent },
  { path: "example-pb", component: ExamplePropertyBindingComponent },
  { path: "example-twb", component: ExampleTwoWayBindingComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }

];
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HomeComponent,
    ContactUsComponent,
    ExampleInterpolationComponent,
    ExamplePropertyBindingComponent,
    ExampleTwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

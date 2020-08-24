import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LearningDerivativesComponent } from './learning-derivatives/learning-derivatives.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    LearningDerivativesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  	CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

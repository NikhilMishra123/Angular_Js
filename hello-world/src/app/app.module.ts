import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
//import { Http } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http' ;
//import {HttpModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LearningDerivativesComponent } from './learning-derivatives/learning-derivatives.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { FakeServerComponent } from './fake-server/fake-server.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    LearningDerivativesComponent,
    ContactFormComponent,
    SignupFormComponent,
    FakeServerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  	CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

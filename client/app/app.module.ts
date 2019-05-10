import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { CoursesComponent }      from './components/courses/courses.component';
import { CourseFormComponent }      from './components/courseForm/course-form.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';

import { HeroService }  from './services/hero.service';
import { CourseService }  from './services/course.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
	CoursesComponent,
	CourseFormComponent
  ],
  providers: [
    HeroService,
	CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

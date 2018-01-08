import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopcardComponent } from './resume/topcard/topcard.component';
import { EducationComponent } from './resume/education/education.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { CareerComponent } from './resume/career/career.component';
import { LanguagesComponent } from './resume/languages/languages.component';
import { RatingComponent } from './rating/rating.component';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TopcardComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    CareerComponent,
    LanguagesComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

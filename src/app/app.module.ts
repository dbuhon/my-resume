import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResumeModule } from "./resume/resume.module";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { AppService } from "./services/app.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    ResumeModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

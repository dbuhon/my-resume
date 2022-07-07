import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./../services/app.service";
import { Resume } from "./../model/resume.model";
import { PDFTemplateComponent } from "./pdf-template/pdf-template.component";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  @ViewChild("pdf") PDFTemplate: PDFTemplateComponent;
  resume: Resume;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getResume().subscribe((response) => {
      this.resume = response.json();
      this.formatResumeData(this.resume);
    });
  }

  downloadPDF() {
    if (environment.production) {
      this.getLocalPDF();
    } else {
      this.generatePDF();
    }
  }

  generatePDF() {
    this.PDFTemplate.exportPDF();
  }

  getLocalPDF() {
    this.appService.getLocalResumePDF();
  }

  private formatResumeData(resume: Resume) {
    this.removePortfolio(resume);
  }

  private removePortfolio(resume: Resume) {
    resume.info.portfolio = null;
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "./../../services/app.service";
import { Resume } from "./../../model/resume.model";

@Component({
  selector: "app-pdf-template",
  templateUrl: "./pdf-template.component.html",
  styleUrls: ["./pdf-template.component.scss"],
})
export class PDFTemplateComponent implements OnInit {
  @ViewChild("pdf") pdfExport;
  resume: Resume;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getResume().subscribe((response) => {
      const resume = response.json();
      this.formatCareerData(resume);
      this.resume = resume;
    });
  }

  exportPDF() {
    this.pdfExport.saveAs("dimitri-buhon-cv.pdf");
  }

  private formatCareerData(resume: Resume) {
    resume.career = resume.career.filter(
      (career) => career.description && career.description.length > 0
    );

    resume.career.forEach((job) => {
      job.quote = null;
      job.location = null;
    });
  }
}

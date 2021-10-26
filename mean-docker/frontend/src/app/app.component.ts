import { Component } from '@angular/core';
import { JobRepositoryServiceService } from '../app/service/job-repository-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  jobs: any[] = [];


  constructor(private jobRepository: JobRepositoryServiceService) {
  }

  getJobs(): void {
    this.jobRepository.getJobs()
      .subscribe(result => {
        this.jobs = result;
        console.log("jobs " + JSON.stringify(result));
      });
  }
}





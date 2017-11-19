import { SpringFoxApiService } from './core/api/spring-fox-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sw';

  resources: any[];
  doc: any;

  constructor(
    private springFoxApi: SpringFoxApiService
  ) { }

  ngOnInit(): void {
    this.springFoxApi.uiConfiguration().subscribe(
      config => {
        console.log(config);
      }
    );

    this.springFoxApi.resouces().subscribe(
      resources => {
        console.log(resources);
        this.resources = resources;
      }
    );
  }

  loadGroup(res) {
    this.springFoxApi.apiDoc(res.name).subscribe(
      doc => {
        console.log(doc);
        this.doc = doc;
      }
    );
  }



}

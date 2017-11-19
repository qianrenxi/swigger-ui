import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-api-doc-info',
  templateUrl: './api-doc-info.component.html',
  styleUrls: ['./api-doc-info.component.scss']
})
export class ApiDocInfoComponent implements OnInit {
  @Input() info: any;

  constructor() { }

  ngOnInit() {
  }

}

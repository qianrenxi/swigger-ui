import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-api-doc-operate',
  templateUrl: './api-doc-operate.component.html',
  styleUrls: ['./api-doc-operate.component.scss']
})
export class ApiDocOperateComponent implements OnInit {

  @Input() operate: any;
  @Input() definitions: any;

  showOptionalParameters = false;

  constructor() { }

  ngOnInit() {
  }

  get responses() {
    let reps = [];
    Object.keys(this.operate.responses).forEach(code => {
      reps.push({code: +code, response: this.operate.responses[code]});
    });
    return reps;
  }

  get hasResponse() {
    return this.responses && this.responses.length > 0;
  }

  get responseWithBody() {
    return this.responses.filter(it => !!it.response.schema);
  }

  get hasResponseWithBody() {
    return this.responseWithBody && this.responseWithBody.length > 0;
  }

  get responseMessage() {
    return this.responses.filter(it => !it.response.schema);
  }

  get hasResponseMessage() {
    return this.responseMessage && this.responseMessage.length > 0;
  }

  get parameters() {
    return this.operate.parameters;
  }

  get parameterRequired() {
    return this.parameters.filter(it => !!it.required);
  }

  get parameterOptional() {
    return this.parameters.filter(it => !it.required);
  }
}

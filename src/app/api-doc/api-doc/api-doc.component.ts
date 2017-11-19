import { Http } from '@angular/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sw-api-doc',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.scss']
})
export class ApiDocComponent implements OnInit, OnChanges {

  @Input() doc: any;

  tags: any[];

  cuurOperate;

  constructor(private http: Http) { }

  ngOnInit() {
    this.chDoc();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    if (!changes['doc']) {
      return;
    }
    const change = changes['doc'];
    if (change.firstChange) {
      return;
    }
    if (change.previousValue !== change.currentValue) {
      this.chDoc();
    }
  }

  chDoc() {
    if (this.doc) {
      this.tags = this.doc.tags;

      if (this.tags) {
        this.tags.forEach(tag => {
          tag['paths'] = this.getPaths(tag.name);
        });
      }
    }
  }

  getPaths(tag) {
    const paths = this.doc.paths;
    let ps = [];

    for (const pk of Object.keys(paths)) {
      const path = paths[pk];
      for (const mk of Object.keys(path)) {
        const method = path[mk];
        if (method.tags.includes(tag)) {
          /* if (!ps[pk]) {
            ps[pk] = {};
          }
          ps[pk][mk] = method; */
          ps.push({path: pk, method: mk, summary: method.summary, detail: method});
        }
      }
    }

    return ps;
  }

  getKeys(obj) {
    return Object.keys(obj);
  }

  viewOperate(operate) {
    this.cuurOperate = operate;
  }

  getMethodColor(method) {
    const colors = {
      'get': 'primary',
      'put': 'warning',
      'post': 'success',
      'delete': 'danger',
      'options': 'secondary',
      'patch': 'info',
      'head': 'light'
    };
    return colors[method];
  }

  run(operate) {
    this.http[operate.method](`http://${this.doc.host}${this.doc.basePath}${operate.path}`)
    .subscribe(
      result => {
        operate['result'] = result;
      },
      err => {
        operate['result'] = err;
      }
    );
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-api-doc-model',
  templateUrl: './api-doc-model.component.html',
  styleUrls: ['./api-doc-model.component.scss']
})
export class ApiDocModelComponent implements OnInit {

  @Input() definitions;
  @Input() definition;

  objectPrefix = '{';
  objectSuffix = '}';
  arrayPrefix = '[';
  arraySuffix = ']';

  constructor() { }

  ngOnInit() {
    console.log(this.definition);
  }

  isRef(def) {
    return Object.keys(def).includes('$ref');
  }

  isObject(def) {
    return Object.keys(def).includes('properties');
  }

  isArray(def) {
    return def.type && def.type === 'array';
  }

  isProp(def) {
    return def.type && def.type !== 'array' && def.type !== 'object' && !this.isRef(def);
  }

  getRef(refId: string) {
    let key = refId.replace('#/definitions/', '');
    return this.definitions[key];
  }

  getProps(obj) {
    let props = [];
    if (!this.isObject(obj)) {
      return;
    }
    let properties = obj.properties;
    for (let key of Object.keys(properties)) {
      let def = properties[key];
      /* if (this.isRef(def)) {
        let refId = def['$ref'];
        let ref = this.getRef(refId);
        let subProps = this.getProps(ref);
        props.push({name: key, type: 'object', properties: subProps});
      } else if (this.isArray(def)) {
        let items = def.items;
        if (this.isRef(items)) {
          let refId = items['$ref'];
          let ref = this.getRef(refId);
          let subProps = this.getProps(ref);
          props.push({name: key, type: 'array', items: {type: 'object', properties: subProps}});
        }
        // props.push({name: key, type: 'array', items: items});
      } else {
        props.push({name: key, type: def.type, format: def.format});
      }*/
      if (this.isProp(def)) {
        props.push({name: key, type: def.type, format: def.format});
      } else {
        props.push({name: key, def: def});
      }
    }

    return props;
  }

}

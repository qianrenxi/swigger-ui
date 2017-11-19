import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocMethodComponent } from './api-doc-method.component';

describe('ApiDocMethodComponent', () => {
  let component: ApiDocMethodComponent;
  let fixture: ComponentFixture<ApiDocMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

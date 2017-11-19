import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocInfoComponent } from './api-doc-info.component';

describe('ApiDocInfoComponent', () => {
  let component: ApiDocInfoComponent;
  let fixture: ComponentFixture<ApiDocInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

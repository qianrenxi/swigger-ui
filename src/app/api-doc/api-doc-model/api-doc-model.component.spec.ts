import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocModelComponent } from './api-doc-model.component';

describe('ApiDocModelComponent', () => {
  let component: ApiDocModelComponent;
  let fixture: ComponentFixture<ApiDocModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

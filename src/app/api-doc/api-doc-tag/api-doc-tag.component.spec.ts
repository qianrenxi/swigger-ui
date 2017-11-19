import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocTagComponent } from './api-doc-tag.component';

describe('ApiDocTagComponent', () => {
  let component: ApiDocTagComponent;
  let fixture: ComponentFixture<ApiDocTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocPathComponent } from './api-doc-path.component';

describe('ApiDocPathComponent', () => {
  let component: ApiDocPathComponent;
  let fixture: ComponentFixture<ApiDocPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

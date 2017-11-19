import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocOperateComponent } from './api-doc-operate.component';

describe('ApiDocOperateComponent', () => {
  let component: ApiDocOperateComponent;
  let fixture: ComponentFixture<ApiDocOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDocOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

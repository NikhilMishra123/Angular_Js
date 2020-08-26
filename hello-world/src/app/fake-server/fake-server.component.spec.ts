import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeServerComponent } from './fake-server.component';

describe('FakeServerComponent', () => {
  let component: FakeServerComponent;
  let fixture: ComponentFixture<FakeServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

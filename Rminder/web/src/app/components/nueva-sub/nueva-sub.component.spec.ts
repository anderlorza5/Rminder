import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSubComponent } from './nueva-sub.component';

describe('NuevaSubComponent', () => {
  let component: NuevaSubComponent;
  let fixture: ComponentFixture<NuevaSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

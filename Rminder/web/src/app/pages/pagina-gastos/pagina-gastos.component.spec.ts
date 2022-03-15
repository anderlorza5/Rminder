import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGastosComponent } from './pagina-gastos.component';

describe('PaginaGastosComponent', () => {
  let component: PaginaGastosComponent;
  let fixture: ComponentFixture<PaginaGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

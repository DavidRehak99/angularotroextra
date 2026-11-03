import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subordinados } from './subordinados';

describe('Subordinados', () => {
  let component: Subordinados;
  let fixture: ComponentFixture<Subordinados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subordinados],
    }).compileComponents();

    fixture = TestBed.createComponent(Subordinados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueSquareComponent } from './clue-square.component';

describe('ClueSquareComponent', () => {
  let component: ClueSquareComponent;
  let fixture: ComponentFixture<ClueSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClueSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClueSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

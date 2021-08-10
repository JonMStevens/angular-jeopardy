import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoryatBoardComponent } from './coryat-board.component';

describe('CoryatBoardComponent', () => {
  let component: CoryatBoardComponent;
  let fixture: ComponentFixture<CoryatBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoryatBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoryatBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoryatScorerComponent } from './coryat-scorer.component';

describe('CoryatScorerComponent', () => {
  let component: CoryatScorerComponent;
  let fixture: ComponentFixture<CoryatScorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoryatScorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoryatScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

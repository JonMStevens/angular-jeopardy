import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoryatInfoComponent } from './coryat-info.component';

describe('CoryatInfoComponent', () => {
  let component: CoryatInfoComponent;
  let fixture: ComponentFixture<CoryatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoryatInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoryatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

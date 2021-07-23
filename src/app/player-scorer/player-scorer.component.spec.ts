import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScorerComponent } from './player-scorer.component';

describe('PlayerScorerComponent', () => {
  let component: PlayerScorerComponent;
  let fixture: ComponentFixture<PlayerScorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerScorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

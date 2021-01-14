import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithlistComponent } from './withlist.component';

describe('WithlistComponent', () => {
  let component: WithlistComponent;
  let fixture: ComponentFixture<WithlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

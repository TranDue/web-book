import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamConfigComponent } from './sanpham-config.component';

describe('SanphamConfigComponent', () => {
  let component: SanphamConfigComponent;
  let fixture: ComponentFixture<SanphamConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

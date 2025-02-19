import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolspageComponent } from './toolspage.component';

describe('ToolspageComponent', () => {
  let component: ToolspageComponent;
  let fixture: ComponentFixture<ToolspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

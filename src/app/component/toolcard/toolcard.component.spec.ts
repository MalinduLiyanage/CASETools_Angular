import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolcardComponent } from './toolcard.component';

describe('ToolcardComponent', () => {
  let component: ToolcardComponent;
  let fixture: ComponentFixture<ToolcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

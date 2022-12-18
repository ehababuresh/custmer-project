import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustmersComponent } from './show-custmers.component';

describe('ShowCustmersComponent', () => {
  let component: ShowCustmersComponent;
  let fixture: ComponentFixture<ShowCustmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustmersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCustmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

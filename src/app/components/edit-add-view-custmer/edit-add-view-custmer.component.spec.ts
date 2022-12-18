import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddViewCustmerComponent } from './edit-add-view-custmer.component';

describe('EditAddViewCustmerComponent', () => {
  let component: EditAddViewCustmerComponent;
  let fixture: ComponentFixture<EditAddViewCustmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddViewCustmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddViewCustmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

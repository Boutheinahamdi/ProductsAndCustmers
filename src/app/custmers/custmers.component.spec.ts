import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmersComponent } from './custmers.component';

describe('CustmersComponent', () => {
  let component: CustmersComponent;
  let fixture: ComponentFixture<CustmersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustmersComponent]
    });
    fixture = TestBed.createComponent(CustmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

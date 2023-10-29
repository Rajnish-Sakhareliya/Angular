import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAndListComponent } from './detail-and-list.component';

describe('DetailAndListComponent', () => {
  let component: DetailAndListComponent;
  let fixture: ComponentFixture<DetailAndListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAndListComponent]
    });
    fixture = TestBed.createComponent(DetailAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

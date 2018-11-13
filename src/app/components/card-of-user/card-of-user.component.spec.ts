import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfUserComponent } from './card-of-user.component';

describe('CardOfUserComponent', () => {
  let component: CardOfUserComponent;
  let fixture: ComponentFixture<CardOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

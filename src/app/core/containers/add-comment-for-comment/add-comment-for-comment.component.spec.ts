import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentForCommentComponent } from './add-comment-for-comment.component';

describe('AddCommentForCommentComponent', () => {
  let component: AddCommentForCommentComponent;
  let fixture: ComponentFixture<AddCommentForCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentForCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentForCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

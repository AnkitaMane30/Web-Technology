import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotes } from './edit-notes';

describe('EditNotes', () => {
  let component: EditNotes;
  let fixture: ComponentFixture<EditNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(EditNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

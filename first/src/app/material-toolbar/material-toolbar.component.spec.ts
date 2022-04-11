import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialToolbarComponent } from './material-toolbar.component';

describe('MaterialToolbarComponent', () => {
  let component: MaterialToolbarComponent;
  let fixture: ComponentFixture<MaterialToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

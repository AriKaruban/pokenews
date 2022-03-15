import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsblockComponent } from './newsblock.component';

describe('NewsblockComponent', () => {
  let component: NewsblockComponent;
  let fixture: ComponentFixture<NewsblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

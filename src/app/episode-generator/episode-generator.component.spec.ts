import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeGeneratorComponent } from './episode-generator.component';

describe('EpisodeGeneratorComponent', () => {
  let component: EpisodeGeneratorComponent;
  let fixture: ComponentFixture<EpisodeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

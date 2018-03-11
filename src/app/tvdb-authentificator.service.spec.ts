import { TestBed, inject } from '@angular/core/testing';

import { TvdbAuthentificatorService } from './tvdb-authentificator.service';

describe('TvdbAuthentificatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvdbAuthentificatorService]
    });
  });

  it('should be created', inject([TvdbAuthentificatorService], (service: TvdbAuthentificatorService) => {
    expect(service).toBeTruthy();
  }));
});

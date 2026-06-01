import { TestBed } from '@angular/core/testing';

import { Itunes } from './itunes';

describe('Itunes', () => {
  let service: Itunes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Itunes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

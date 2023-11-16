import { TestBed } from '@angular/core/testing';

import { IsEditorService } from './is-editor.service';

describe('IsEditorService', () => {
  let service: IsEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

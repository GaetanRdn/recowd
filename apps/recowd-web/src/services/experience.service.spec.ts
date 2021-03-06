import { TestBed } from '@angular/core/testing';
import { ExperienceService } from './experience.service';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Experience } from '@recowd/models';
import { CBP_EXPERIENCE, NORSYS_EXPERIENCE } from '@recowd/test/data';
import { lastValueFrom, of } from 'rxjs';
import { CACHE_HTTP_CONTEXT_TOKEN } from '@recowd/services/backend';

describe('ExperienceService', () => {
  let service: ExperienceService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: { get: jest.fn() } }],
    });
    service = TestBed.inject(ExperienceService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should make getAll', async () => {
    const expected: Experience[] = [CBP_EXPERIENCE, NORSYS_EXPERIENCE];
    jest.spyOn(httpClient, 'get').mockReturnValueOnce(of(expected));
    const expectedContext: HttpContext = new HttpContext();
    expectedContext.set(CACHE_HTTP_CONTEXT_TOKEN, true);

    const experiences: Experience[] | undefined = await lastValueFrom(
      service.getAll()
    );

    expect(experiences).toEqual(expected);
    expect(httpClient.get).toBeCalledWith('./assets/data/experiences.json', {
      context: expectedContext,
    });
  });
});

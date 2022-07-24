import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Partner } from '@recowd/models';
import { lastValueFrom, of } from 'rxjs';
import { CACHE_HTTP_CONTEXT_TOKEN } from '@recowd/services/backend';
import { PartnerService } from './partner.service';
import { PAULO_PARTNER } from '@recowd/test/data';

describe('PartnerService', () => {
  let service: PartnerService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: { get: jest.fn() } }],
    });
    service = TestBed.inject(PartnerService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should make getAll', async () => {
    const expected: Partner[] = [PAULO_PARTNER];
    jest.spyOn(httpClient, 'get').mockReturnValueOnce(of(expected));
    const expectedContext: HttpContext = new HttpContext();
    expectedContext.set(CACHE_HTTP_CONTEXT_TOKEN, true);

    const experiences: Partner[] | undefined = await lastValueFrom(
      service.getAll()
    );

    expect(experiences).toEqual(expected);
    expect(httpClient.get).toBeCalledWith('./assets/data/partners.json', {
      context: expectedContext,
    });
  });
});

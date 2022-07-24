import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Education } from '@recowd/models';
import { lastValueFrom, of } from 'rxjs';
import { DegreeService } from './degree.service';

describe('DegreeService', () => {
  let service: DegreeService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: { get: jest.fn() } }],
    });
    service = TestBed.inject(DegreeService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should make getAll', async () => {
    const expected: Education[] = [
      {
        degree: 'Master MIAGE par apprentissage',
        from: 2012,
        to: 2014,
        description:
          "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
        logo: 'universite-paris-sud.jpeg',
      },
    ];
    jest.spyOn(httpClient, 'get').mockReturnValueOnce(of(expected));

    const experiences: Education[] | undefined = await lastValueFrom(
      service.getAll()
    );

    expect(experiences).toEqual(expected);
    expect(httpClient.get).toBeCalledWith('./assets/data/degrees.json');
  });
});

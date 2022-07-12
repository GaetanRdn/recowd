import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '@recowd/models';
import { EducationCardComponent } from '@recowd/ui/molecules';
import { AvatarDirective } from '@recowd/ui-atoms';

@Component({
  selector: 'rc-education-page',
  standalone: true,
  imports: [CommonModule, EducationCardComponent, AvatarDirective],
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationPageComponent {
  protected readonly educations: Education[] = [
    {
      degree: 'Master MIAGE par apprentissage',
      from: 2012,
      to: 2014,
      description:
        "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
      logo: 'universite-paris-sud.jpeg',
    },
    {
      degree: 'Licence MIAGE par apprentissage',
      from: 2011,
      to: 2012,
      description:
        "Université Paris-Sud, Méthodes Informatique Appliquées à la Gestion d'entreprise",
      logo: 'universite-paris-sud.jpeg',
    },
    {
      degree: 'DUT informatique et gestion',
      from: 2008,
      to: 2010,
      description: "IUT Aix-Marseille II, informatique et gestion d'entreprise",
      logo: 'iut-aix-marseille.jpeg',
    },
  ];
}

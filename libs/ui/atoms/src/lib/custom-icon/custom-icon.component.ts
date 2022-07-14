import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Required } from '@recowd/utility-types';
import { SafePipe } from '@recowd/ui/pipes';

@Component({
  selector: 'rc-custom-icon',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomIconComponent {
  @Input() @Required() public name!: string;
  @Input() public width = 24;

  private _height?: number;

  get height(): number {
    return this._height ?? this.width;
  }

  @Input() set height(height: number) {
    this._height = height;
  }
}

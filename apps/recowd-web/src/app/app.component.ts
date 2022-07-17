import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { routeAnimations } from '@recowd/ui-animations';

@Component({
  selector: 'rc-recowd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly _router: Router = inject(Router);

  public redirectTo(route: string): void {
    this._router.navigateByUrl(route);
  }

  public prepareRoute(outlet: RouterOutlet): string | undefined {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}

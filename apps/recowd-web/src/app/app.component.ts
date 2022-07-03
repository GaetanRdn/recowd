import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RwToolbarComponent } from '@recowd/ui/organisms';

@Component({
  selector: 'rc-recowd-root',
  standalone: true,
  imports: [RouterModule, RwToolbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}

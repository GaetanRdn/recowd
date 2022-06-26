import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RwToolbarComponent } from './rw-toolbar/rw-toolbar.component';

@Component({
  selector: 'rc-recowd-root',
  standalone: true,
  imports: [RouterModule, RwToolbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}

import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  selector: 'recowd-root',
  standalone: true,
  imports: [NxWelcomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'design-system';
}

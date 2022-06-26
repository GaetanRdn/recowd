import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RwToolbarComponent } from './rw-toolbar/rw-toolbar.component';
import { ContactButtonIconComponent } from './rw-toolbar/contact-button-icon/contact-button-icon.component';

@NgModule({
  declarations: [AppComponent, ContactButtonIconComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RwToolbarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

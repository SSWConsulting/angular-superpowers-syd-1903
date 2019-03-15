import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebootcamp-crm';
  now = Date();
}

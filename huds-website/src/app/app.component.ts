import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'huds-website';
}

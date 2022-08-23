import { Component } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'benchmark';

  constructor(private firebaseService: FirebaseService) {}

}

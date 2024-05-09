import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  activeTab: string = 'one';

  toggleTab(tab: string) {
    this.activeTab = tab;
  }
}

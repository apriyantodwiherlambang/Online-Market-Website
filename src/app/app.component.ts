import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'belajar_angular';

  dummyData = {
    title: 'Hello, World!',
    content: 'This is an example content',
  };

  internalMessage: string = 'This is my internal message app.component';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Flowbite
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    }
  }

  receiveMessage($message: string): void {
    this.internalMessage = $message;
  }
}

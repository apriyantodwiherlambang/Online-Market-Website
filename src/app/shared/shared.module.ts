import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LandingGalleryComponent } from './components/landing-gallery/landing-gallery.component';
import { TimelineOrderComponent } from './components/timeline-order/timeline-order.component';
import { AppDownloadComponent } from './components/app-download/app-download.component';
import { FaqComponent } from './components/faq/faq.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CardComponent,
    GalleryComponent,
    LandingGalleryComponent,
    TimelineOrderComponent,
    AppDownloadComponent,
    FaqComponent,
    HeadingComponent,
    CardMenuComponent,
  ],
  imports: [CommonModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    CardComponent,
    GalleryComponent,
    LandingGalleryComponent,
    TimelineOrderComponent,
    AppDownloadComponent,
    FaqComponent,
    HeadingComponent,
    CardMenuComponent,
  ],
})
export class SharedModule {}

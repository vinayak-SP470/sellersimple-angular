import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appConfigure, appServiceConfig } from './AppConfig/appconfig.service';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { HomepageComponent } from './seller-dashboard/homepage/homepage.component';
import { AnalyticsComponent } from './seller-dashboard/analytics/analytics.component';
import { MonitoringComponent } from './seller-dashboard/monitoring/monitoring.component';
import { ProductsComponent } from './seller-dashboard/products/products.component';
import { ReviewsComponent } from './seller-dashboard/reviews/reviews.component';
import { CustomersComponent } from './seller-dashboard/customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    NavbarComponent,
    FaqComponent,
    PricingComponent,
    ContactUsComponent,
    SellerDashboardComponent,
    HomepageComponent,
    AnalyticsComponent,
    MonitoringComponent,
    ProductsComponent,
    ReviewsComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : appServiceConfig,
      useValue: appConfigure
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { FaqComponent } from './faq/faq.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { HomepageComponent } from './seller-dashboard/homepage/homepage.component';
import { AnalyticsComponent } from './seller-dashboard/analytics/analytics.component';
import { CustomersComponent } from './seller-dashboard/customers/customers.component';
import { ProductsComponent } from './seller-dashboard/products/products.component';
import { MonitoringComponent } from './seller-dashboard/monitoring/monitoring.component';
import { ReviewsComponent } from './seller-dashboard/reviews/reviews.component';
import { SettingsComponent } from './seller-dashboard/settings/settings.component';
import { AiVideoComponent } from './seller-dashboard/ai-video/ai-video.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { DashboardComponent } from './admin-navbar/dashboard/dashboard.component';
import { DealsComponent } from './admin-navbar/deals/deals.component';
import { CustomerComponent } from './admin-navbar/customer/customer.component';

const routes: Routes = [
  // { path: '', redirectTo: '/spericorn/login', pathMatch: 'full' },
  // { path: '', component: HomeComponent },
  {
    path: '', component: NavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact-us', component: ContactUsComponent },
]
  },
  {
    path: 'seller', component: SellerDashboardComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'customer', component: CustomersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'monitoring', component: MonitoringComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'ai-video', component: AiVideoComponent },
]
  },
  {
    path: 'admin', component: AdminNavbarComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'deals', component: DealsComponent },
    
]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

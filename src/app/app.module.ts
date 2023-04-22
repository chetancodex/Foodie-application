import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeroComponent } from './hero/hero.component';
import { FeatureLogoComponent } from './feature-logo/feature-logo.component';
import { SectionHowComponent } from './section-how/section-how.component';
import { SectionMealsComponent } from './section-meals/section-meals.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.router-module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeatureLogoComponent,
    SectionHowComponent,
    SectionMealsComponent,
    TestimonialsComponent,
    PricingComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

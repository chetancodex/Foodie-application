import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgModel } from "@angular/forms";
import { HeroComponent } from './hero/hero.component';
import { SectionHowComponent } from './section-how/section-how.component';
import { SectionMealsComponent } from './section-meals/section-meals.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { CtaComponent } from './cta/cta.component';



const appRoute : Routes = [
    { path : '' ,component: HeroComponent},
    { path : 'section-how' ,component: SectionHowComponent},
    { path : 'section-meals' ,component: SectionMealsComponent},
    { path : 'section-testimonials' ,component: TestimonialsComponent},
    { path : 'pricing' ,component: PricingComponent},
    { path : 'Call-to-Action' ,component: CtaComponent}
  
  ]


@NgModule({
   imports: [
    RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
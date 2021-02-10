import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { FenderComponent } from './fender/fender.component';
import { MaildripComponent } from './maildrip/maildrip.component';
import { RubynavComponent } from './rubynav/rubynav.component';
import { SlateComponent } from './slate/slate.component';
import { IqComponent } from './iq/iq.component';
import { SprinkbokComponent } from './sprinkbok/sprinkbok.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarblackComponent } from './navbarblack/navbarblack.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoreComponent,
    FenderComponent,
    MaildripComponent,
    RubynavComponent,
    SlateComponent,
    IqComponent,
    SprinkbokComponent,
    NavbarComponent,
    NavbarblackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { HomeComponent } from './home/home.component';
import { FenderComponent } from './fender/fender.component';
import { SlateComponent } from './slate/slate.component';
import { IqComponent } from './iq/iq.component';
import { MaildripComponent } from './maildrip/maildrip.component';
import { RubynavComponent } from './rubynav/rubynav.component';
import { SprinkbokComponent } from './sprinkbok/sprinkbok.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'more', component: MoreComponent},
  {path: 'about', component: AboutComponent},
  {path: 'fender', component: FenderComponent},
  {path: 'slate', component: SlateComponent},
  {path: 'iq', component: IqComponent},
  {path: 'maildrip', component: MaildripComponent},
  {path: 'rubyNav', component: RubynavComponent},
  {path: 'sprinkbok', component: SprinkbokComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

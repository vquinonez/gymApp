import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeneralGymsComponent } from './general-gyms/general-gyms.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { GymInfoComponent } from './gym-info/gym-info.component';
import { GeneralMembersComponent } from './general-members/general-members.component';
import { MemberInfoComponent } from './member-info/member-info.component';
import { FieldsFilterPipe } from './pipes/fields-filter.pipe';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'gyms', component: GeneralGymsComponent },
  { path: 'gyms/:name', component: GymInfoComponent },
  { path: 'members', component: GeneralMembersComponent },
  { path: 'members/:id', component: MemberInfoComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralGymsComponent,
    SidebarComponent,
    ListItemsComponent,
    GymInfoComponent,
    GeneralMembersComponent,
    MemberInfoComponent,
    FieldsFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

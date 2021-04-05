import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAnnouncementsComponent } from './user-announcements/user-announcements.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserAnnouncementsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

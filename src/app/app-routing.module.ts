import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'createprofile', loadChildren: './createprofile/createprofile.module#CreateprofilePageModule' },
  { path: 'add-rooms', loadChildren: './add-rooms/add-rooms.module#AddRoomsPageModule' },
  { path: 'view-rooms', loadChildren: './view-rooms/view-rooms.module#ViewRoomsPageModule' },
  { path: 'view-users', loadChildren: './view-users/view-users.module#ViewUsersPageModule' },
  { path: 'admin-team', loadChildren: './admin-team/admin-team.module#AdminTeamPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'room-info', loadChildren: './room-info/room-info.module#RoomInfoPageModule' },
  { path: 'view-users-info', loadChildren: './view-users-info/view-users-info.module#ViewUsersInfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

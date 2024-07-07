import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OtpComponent } from './otp/otp.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"about",canActivate:[AuthGuard] ,component:AboutComponent},
  {path:"register",component:RegisterComponent},
  {path:"notifications",component:NotificationsComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",canActivate:[AuthGuard] ,component:ProfileComponent},
  {path:"chat",canActivate:[AuthGuard] ,component:ChatComponent},
  {path:"contacts",canActivate:[AuthGuard] ,component:ContactsComponent},
  {path:"otp",component:OtpComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

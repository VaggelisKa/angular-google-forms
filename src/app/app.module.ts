import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-c6p3rtqu.us.auth0.com',
      clientId: '0PzRSecyjzyaRq2rDO06IPMrKnjMvMly',
    }),
    AppRoutingModule,
    LoginModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

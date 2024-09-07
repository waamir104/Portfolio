import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CopyRightComponent } from './components/footer/copy-right/copy-right.component';
import { FrontPageComponent } from './components/main/home/front-page/front-page.component';
import { MainComponent } from './components/main/main/main.component';
import { CompaniesComponent } from './components/main/home/companies/companies.component';
import { TechnologiesComponent } from './components/main/home/technologies/technologies.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { MainContentComponent } from './components/main/home/main-content/main-content.component';
import { GetInTouchComponent } from './components/main/home/get-in-touch/get-in-touch.component';
import { AboutUsComponent } from './components/main/home/about-us/about-us.component';
import { SocialMediaComponent } from './components/main/social-media/social-media.component';
import { ServicesComponent } from './components/main/home/services/services.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CopyRightComponent,
    FrontPageComponent,
    MainComponent,
    CompaniesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    MainContentComponent,
    GetInTouchComponent,
    AboutUsComponent,
    SocialMediaComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

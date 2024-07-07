import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CopyRightComponent } from './components/footer/copy-right/copy-right.component';
import { FrontPageComponent } from './components/main/main-content/front-page/front-page.component';
import { MainComponent } from './components/main/main/main.component';
import { CompaniesComponent } from './components/main/main-content/companies/companies.component';
import { TechnologiesComponent } from './components/main/main-content/technologies/technologies.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { MainContentComponent } from './components/main/main-content/main-content/main-content.component';
import { GetInTouchComponent } from './components/main/main-content/get-in-touch/get-in-touch.component';
import { AboutUsComponent } from './components/main/main-content/about-us/about-us.component';

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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

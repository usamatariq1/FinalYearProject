import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './services/get-data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { FormsComponent } from './template/forms/forms.component';
import { ButtonsComponent } from './template/buttons/buttons.component';
import { TablesComponent } from './template/tables/tables.component';
import { TypographyComponent } from './template/typography/typography.component';
import { IconsComponent } from './template/icons/icons.component';
import { AlertsComponent } from './template/alerts/alerts.component';
import { AccordionsComponent } from './template/accordions/accordions.component';
import { BadgesComponent } from './template/badges/badges.component';
import { ProgressbarComponent } from './template/progressbar/progressbar.component';
import { BreadcrumbsComponent } from './template/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './template/pagination/pagination.component';
import { DropdownComponent } from './template/dropdown/dropdown.component';
import { TooltipsComponent } from './template/tooltips/tooltips.component';
import { CarouselComponent } from './template/carousel/carousel.component';
import { TabsComponent } from './template/tabs/tabs.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './services/auth-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatListModule, MatSelectModule } from '@angular/material';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    LoginFormComponent,
  ],
  imports: [
    RouterModule,
    NgbModule.forRoot(),
    BrowserModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    StudentModule,
    MatSelectModule,
    // MatSliderModule,
    // MatButtonModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatListModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowCustmersComponent } from './components/show-custmers/show-custmers.component';
import { EditAddViewCustmerComponent } from './components/edit-add-view-custmer/edit-add-view-custmer.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PnfComponent } from './components/pnf/pnf.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { ContactFilterPipe } from './pipes/contact-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowCustmersComponent,
    EditAddViewCustmerComponent,
    ShowCustmersComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PipesComponent,
    FilterPipe,
    ContactFilterPipe,
    PnfComponent,
    ContactComponent,
    SidebarComponent,
    MainComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

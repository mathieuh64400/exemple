import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/POST/index/index.component';
import { EventbynamePipe } from './eventbyname.pipe';
import { NavbarComponent } from './component/Menu/navbar/navbar.component';
import { FooterComponent } from './component/Menu/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './component/first/first.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { DemandeComponent } from './component/Message/demande/demande.component';
import { MessageComponent } from './component/Message/message/message.component';
import { MessagesbynamePipe } from './messagesbyname.pipe';
import { UtilisateurComponent } from './component/Utilisateur/utilisateur/utilisateur.component';
import { CreateutilisateurComponent } from './component//Utilisateur/createutilisateur/createutilisateur.component';
import { UtilisateurbynamePipe } from './utilisateurbyname.pipe';
import { CommandesComponent } from './component/commandes/commandes.component';
import { ProductComponent } from './component/Product/product/product.component';
import { ProductbynamePipe } from './productbyname.pipe';
// import {NgxElectronModule} from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EventbynamePipe,
    NavbarComponent,
    FooterComponent,
    FirstComponent,
    AccueilComponent,
    DemandeComponent,
    MessageComponent,
    MessagesbynamePipe,
    UtilisateurComponent,
    CreateutilisateurComponent,
    UtilisateurbynamePipe,
    CommandesComponent,
    ProductComponent,
    ProductbynamePipe,
    // NgxElectronModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

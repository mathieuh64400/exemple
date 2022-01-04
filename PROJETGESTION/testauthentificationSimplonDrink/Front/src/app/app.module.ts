import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { AccueilComponent} from './component/accueil/accueil.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { UtilisateurIndexComponent } from './component/utilisateur/utilisateur-index/utilisateur-index.component';
import { UtilisateurcreateComponent } from './component/utilisateur/utilisateurcreate/utilisateurcreate.component';
import { UtilisateureditComponent } from './component/utilisateur/utilisateuredit/utilisateuredit.component';
import { UtilisateurbynamePipe } from './utilisateurbyname.pipe';
import { PostIndexComponent } from './component/Post/post-index/post-index.component';
import { PostCreateComponent } from './component/Post/post-create/post-create.component';
import { PostEditComponent } from './component/Post/post-edit/post-edit.component';
import { PbcarteIndexComponent } from './component/Event/pbcarte-index/pbcarte-index.component';
import { PbcarteCreateComponent } from './component/Event/pbcarte-create/pbcarte-create.component';
import { PbcarteEditComponent } from './component/Event/pbcarte-edit/pbcarte-edit.component';
import { ProductIndexComponent } from './component/Product/product-index/product-index.component';
import { ProductCreateComponent } from './component/Product/product-create/product-create.component';
import { ProductEditComponent } from './component/Product/product-edit/product-edit.component';
import { ProductComponent } from './component/Product/product/product.component';
import { ProductcreateComponent } from './component/Product/productcreate/productcreate.component';
import { ProducteditComponent } from './component/Product/productedit/productedit.component';
import { DemandeComponent } from './component/demande/demande.component';
import { CommandesComponent } from './component/commandes/commandes.component';
import { PageComponent } from './component/page/page.component';
import { FooterComponent } from './component/menu/footer/footer.component';
import { NavbarComponent } from './component/menu/navbar/navbar.component';
import { ChatComponent } from './component/chat/chat.component';
import { UsernameComponent } from './component/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AccueilComponent,
     UtilisateurIndexComponent,
      UtilisateurcreateComponent, 
      UtilisateureditComponent, 
      UtilisateurbynamePipe, 
      PostIndexComponent,
       PostCreateComponent, 
       PostEditComponent,
        PbcarteIndexComponent,
         PbcarteCreateComponent,
          PbcarteEditComponent, 
          ProductIndexComponent,
           ProductCreateComponent,
            ProductEditComponent, 
            ProductComponent,
             ProductcreateComponent, 
             ProducteditComponent,
              DemandeComponent, 
              CommandesComponent,
               PageComponent,
                FooterComponent,
                 NavbarComponent,
                  ChatComponent,
                   UsernameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CommandesComponent } from './component/commandes/commandes.component';
import { FirstComponent } from './component/first/first.component';
import { DemandeComponent } from './component/Message/demande/demande.component';
import { MessageComponent } from './component/Message/message/message.component';
import { IndexComponent } from './component/POST/index/index.component';
import { ProductComponent } from './component/Product/product/product.component';
import { CreateutilisateurComponent } from './component/Utilisateur/createutilisateur/createutilisateur.component';
import { UtilisateurComponent } from './component/Utilisateur/utilisateur/utilisateur.component';

const routes: Routes = [
  {path:'', component:FirstComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'demande',component:MessageComponent},
  {path:'createdemande',component:DemandeComponent},
  {path:'event',component:IndexComponent},
  {path:'listutilisateur',component:UtilisateurComponent},
  {path:'adduser',component:CreateutilisateurComponent},
  {path:'productlist',component:ProductComponent},
  {path:'commande', component:CommandesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

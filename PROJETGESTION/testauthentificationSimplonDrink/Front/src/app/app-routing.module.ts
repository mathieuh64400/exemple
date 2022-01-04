import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { SigninComponent } from './component/user/signin/signin.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserComponent } from './component/user/user.component';
import {AuthGuard} from './auth/auth.guard';
import { UtilisateurIndexComponent } from './component/utilisateur/utilisateur-index/utilisateur-index.component';
import { UtilisateureditComponent } from './component/utilisateur/utilisateuredit/utilisateuredit.component';
import { PostIndexComponent } from './component/Post/post-index/post-index.component';
import { PostCreateComponent } from './component/Post/post-create/post-create.component';
import { PostEditComponent } from './component/Post/post-edit/post-edit.component';
import { PbcarteIndexComponent } from './component/Event/pbcarte-index/pbcarte-index.component';
import { PbcarteCreateComponent } from './component/Event/pbcarte-create/pbcarte-create.component';
import { PbcarteEditComponent } from './component/Event/pbcarte-edit/pbcarte-edit.component';

import { ProductComponent } from './component/Product/product/product.component';
import { ProductcreateComponent } from './component/Product/productcreate/productcreate.component';
import { ProducteditComponent } from './component/Product/productedit/productedit.component';
import { CommandesComponent } from './component/commandes/commandes.component';
import { DemandeComponent } from './component/demande/demande.component';
import { PageComponent } from './component/page/page.component';
import { ChatComponent } from './component/chat/chat.component';
const routes: Routes = [
{path:'',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'page',component:PageComponent,canActivate:[AuthGuard]},
  {path:'accueil',component:AccueilComponent},
  {path:'utilisateur',component:UtilisateurIndexComponent},
  {path:'utilisateur/:_id/edit',component:UtilisateureditComponent},
  {path:'post',component:PostIndexComponent},
  {path:'post/create',component:PostCreateComponent},
  {path:'post/:_id/edit',component:PostEditComponent},

  {path:'pbcarte',component:PbcarteIndexComponent},
  {path:'pbcartecreate',component:PbcarteCreateComponent},
  {path:'pbcarte/:_id/edit',component:PbcarteEditComponent},
  {path:'product',component:ProductComponent},
  {path:'productcreate',component:ProductcreateComponent},
  {path:'product/:_id/edit',component:ProducteditComponent},
  {path:'commande',component:CommandesComponent},
  {path:'demande',component:DemandeComponent},
  {path:'chat',component:ChatComponent}

  // {path:'produit',component:ProductIndexComponent},
  // {path:'produitcreate',component:ProductCreateComponent},
  // {path:'produit/:_id/edit',component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

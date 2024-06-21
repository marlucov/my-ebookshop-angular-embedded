import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { CategoryComponent } from './components/category/category.component';
import { categoryPath, homePath, infoPath } from 'src/app/utils/utils';

const routes: Routes = [
  {
    path: homePath,
    component: HomeComponent
  }
  , {
    path: infoPath,
    component: InfoComponent
  }
  , {
    path: categoryPath,
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

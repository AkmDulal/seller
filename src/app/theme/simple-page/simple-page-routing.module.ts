import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimplePageComponent} from './simple-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SimplePageComponent,
    data: {
      title: 'Sample Page',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class SimplePageRoutingModule { }

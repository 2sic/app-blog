import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { BlocksComponent } from './blocks/blocks.component';

const routes: Routes = [
  { path: '', component: ManagementComponent},
  { path: 'blocks', component: BlocksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

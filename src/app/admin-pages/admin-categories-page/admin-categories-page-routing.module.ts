import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminCategoriesPageComponent } from './admin-categories-page.component'

const routes: Routes = [{ path: '', component: AdminCategoriesPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminCategoriesPageRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule),
    },
    {
        path: 'products/:id',
        loadChildren: () =>
            import('./pages/product-details-page/product-details-page.module').then((m) => m.ProductDetailsPageModule),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('./pages/product-list-page/product-list-page.module').then((m) => m.ProductListPageModule),
    },
    {
        path: 'checkout/pay',
        loadChildren: () =>
            import('./pages/checkout-payment-page/checkout-payment-page.module').then(
                (m) => m.CheckoutPaymentPageModule,
            ),
    },
    {
        path: 'checkout',
        loadChildren: () => import('./pages/checkout-page/checkout-page.module').then((m) => m.CheckoutPageModule),
    },
    {
        path: 'admin/products/create',
        loadChildren: () =>
            import('./admin-pages/admin-product-edit-page/admin-product-edit-page.module').then(
                (m) => m.AdminProductEditPageModule,
            ),
    },
    {
        path: 'admin/products/:id/update',
        loadChildren: () =>
            import('./admin-pages/admin-product-edit-page/admin-product-edit-page.module').then(
                (m) => m.AdminProductEditPageModule,
            ),
    },
    {
        path: 'admin/products',
        loadChildren: () =>
            import('./admin-pages/admin-product-list-page/admin-product-list-page.module').then(
                (m) => m.AdminProductListPageModule,
            ),
    },
    {
        path: 'admin/categories',
        loadChildren: () =>
            import('./admin-pages/admin-categories-page/admin-categories-page.module').then(
                (m) => m.AdminCategoriesPageModule,
            ),
    },
    {
        path: 'admin',
        redirectTo: 'admin/products',
    },
    {
        path: '**',
        loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

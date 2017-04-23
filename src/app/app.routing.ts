import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserComponent } from './component/user/user.component';
import { RewardsComponent } from './component/rewards/rewards.component';
import { OffersComponent } from './component/offers/offers.component';
import { AddadminComponent } from './component/addadmin/addadmin.component';
import { RolesComponent } from './component/roles/roles.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'rewards', component: RewardsComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'addadmin', component: AddadminComponent },
    { path: 'roles', component: RolesComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

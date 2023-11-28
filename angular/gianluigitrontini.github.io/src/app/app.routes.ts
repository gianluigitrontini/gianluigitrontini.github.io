import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProgettiComponent } from './pages/progetti/progetti.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'progetti',
        component: ProgettiComponent
    },
];

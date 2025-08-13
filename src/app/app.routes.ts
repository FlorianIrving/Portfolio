import {Routes} from '@angular/router';
import {App} from './app';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Projects} from './pages/projects/projects';
import {Certificates} from './pages/certificates/certificates';
import {Contact} from './pages/contact/contact';
import {Imprint} from './pages/imprint/imprint';


const childRoutes: Routes = [
  {
    path: '', component: Home,
  },
  {
    path: 'about', component: About,
  },
  {
    path: 'projects', component: Projects,
  },
  {
    path: 'certificates', component: Certificates,
  },
  {
    path: 'contact', component: Contact,
  },
  {
    path: 'imprint', component: Imprint,
  }
];

export const routes: Routes = [
  {path: '', component: App, data: {lang: 'de'}, children: childRoutes},

  {path: 'en', component: App, data: {lang: 'en'}, children: childRoutes}
];

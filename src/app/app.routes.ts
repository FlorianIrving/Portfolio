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
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/home/home')
  //       .then(m => m.Home),
  // },
  // {
  //   path: 'about',
  //   loadComponent: () =>
  //     import('./pages/about/about')
  //       .then(m => m.About),
  // },
  // {
  //   path: 'projects',
  //   loadComponent: () =>
  //     import('./pages/projects/projects')
  //       .then(m => m.Projects),
  // },
  // {
  //   path: 'certificates',
  //   loadComponent: () =>
  //     import('./pages/certificates/certificates')
  //       .then(m => m.Certificates),
  // },
  // {
  //   path: 'contact',
  //   loadComponent: () =>
  //     import('./pages/contact/contact')
  //       .then(m => m.Contact),
  // },
  // {
  //   path: 'imprint',
  //   loadComponent: () =>
  //     import('./pages/imprint/imprint')
  //       .then(m => m.Imprint),
  // },
];

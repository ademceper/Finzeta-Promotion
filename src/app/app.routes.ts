import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./clients/clients.component').then((m) => m.ClientsComponent),
  },
  {
    path: 'our-services',
    loadComponent: () =>
      import('./our-services/our-services.component').then(
        (m) => m.OurServicesComponent
      ),
  },
  {
    path: 'works',
    loadComponent: () =>
      import('./works/works.component').then((m) => m.WorksComponent),
  },
  {
    path: 'project',
    loadComponent: () =>
      import('./project/project.component').then((m) => m.ProjectComponent),
  },
  {
    path: 'our-team',
    loadComponent: () =>
      import('./our-team/our-team.component').then((m) => m.OurTeamComponent),
  },
  {
    path: '**', // Wildcard route
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

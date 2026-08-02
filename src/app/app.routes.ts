import { Routes } from "@angular/router";

export enum Paths {
  LOGIN = 'login',
  REGISTER = 'register',
  HOME = '',
  SETTINGS = 'settings'
}

export const routes: Routes = [
    { path: Paths.HOME, loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: Paths.SETTINGS, loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
    { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
import { RouterConfig, provideRouter } from '@angular/router';
 
import { PartiesListComponent } from './imports/parties/parties-list.component';
import { PartyDetailsComponent } from './imports/parties/party-details.component';
 
// routes array contains the routes of the pages that are going to be used 
const routes: RouterConfig = [
  { path: '', component: PartiesListComponent }
];
 
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
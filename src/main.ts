import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { SearchService } from'./app/search.service';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

////[Injection service];
bootstrap(AppComponent, [SearchService, HTTP_PROVIDERS]);


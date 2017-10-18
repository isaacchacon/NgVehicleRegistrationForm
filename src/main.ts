import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VehicleRegistrationReactiveModule } from './VehicleRegistrationReactive/vehicle-registration-reactive.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(VehicleRegistrationReactiveModule)
  .catch(err => console.log(err));
